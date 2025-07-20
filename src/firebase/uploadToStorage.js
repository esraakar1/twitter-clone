
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from ".";
import { v4 } from "uuid";

// parametre olarak aldığı dosya bir resim ise storage'a yükle ve geriye resmin url ini return et


const uploadToStorage = async (file) => {

    // dosya yoksa veya dosya resim değilse fonksiyonu durdur

    if (!file || !file.type.startsWith("image")) return null;

    // maksimum dosya boyutu 2mb gçiyorsa hata fırlat
    if(file.size > 2097152) {
      toast.error("Lütfen 2mb'ın altında bir medya yükleyin");
      throw new Error("Medya içeriği sınırı aşıyor");
    }
    
    // 3) dosyanın yükleneceği konumun referansını al
     const imageRef = ref(storage, v4() + file.name);

    // 4) referansını oluşturduğumuz konuma dosyayı yükle
     await uploadBytes(imageRef,file);

    // 5) storage a yüklenen dosyanın url' ini al ve return et
   const url = await getDownloadURL(imageRef);

   return url; 
    
};

export default uploadToStorage;