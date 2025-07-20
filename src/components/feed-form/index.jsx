import React, { useRef, useState } from 'react'
import UserAvatar from './user-avatar';
import TextArea from './text-area';
import FormActions from './form-actions';
import ImagePreview from './image-preview';
import uploadToStorage from '../../firebase/uploadToStorage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';


const Form = ({user}) => {
    const [isLoading, setIsLoading] = useState(false);

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    // önizleme resmini kaldır
    const clearImage = () => {
        setImage(null);

        if(fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // form gönderilince
    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = e.target.text.value;
        const file = e.target.image.files[0];

        if(!text && !file) return toast.warning("Lütfen içeriği belirleyiniz");

        try {
          setIsLoading(true)

        //  resim varsa resmi storageye yükle
          const url = await uploadToStorage(file);

        // tewwts kolleksiyonunun referansını al
       const collectionRef = collection(db, "tweets");

        // yeni twwet belgesi kolleksiyonuna kaydet
       await addDoc(collectionRef, {
            content: {
                text,
                image: url,
            },
            isEdited:false,
            likes: [],
            createdAt: serverTimestamp(),
            user: {
                id:user.uid,
                name: user.displayName,
                photo: user.photoURL,
            }
        });

        // formu sıfırla
        e.target.reset();
        clearImage();
     } catch (error) {
            console.log(error);
        }       

        setIsLoading(false);
    };

  return (
    <div className='border-b border-tw-gray p-4 flex gap-3'>
       <UserAvatar photo={user.photoURL} name={user.displayName} />

        <form onSubmit={handleSubmit} className='w-full pt-1'>
           <TextArea />
           
           <ImagePreview image={image} clearImage={clearImage} />


           <FormActions isLoading={isLoading}
            fileInputRef={fileInputRef} onImageChange={onImageChange}/>
        </form>
    </div>
  )
}

export default Form