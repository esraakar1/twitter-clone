import React, { useRef, useState } from 'react'
import Modal from '../../components/modal';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const ForgotPassword = () => {

    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef();

   const handlePasswordReset = () => {

        const email = inputRef.current.value;

        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.info("Mailinize şifre sıfırlama bağlantısı gönderildi.");
            setIsOpen(false);
        })
        .catch(() => toast.error("Mail gönderilemedi"));
    };

  return (
    <>
    <button type='button'
    onClick={() => setIsOpen(true)}
     className='text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer'>Şifreni mi Unuttun?</button>
     
     <Modal isOpen={isOpen} close={() => setIsOpen(false)} > 
        <div
        className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Şifreni mi unuttun?</h1>
            <p className='text-zinc-400'>
                Email Adresinize bir şifre sıfırlama bağlantısı göndereceğiz
            </p>
            <input ref={inputRef} placeholder='Email' type="email" className='input' />

            <button
            type='button'
            onClick={handlePasswordReset}
             className='bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1 cursor-pointer'>Şifre sıfırlama bağlantısı gönder</button>

            <button 
            type='button'
            onClick={() => setIsOpen(false)}
            className='bg-zinc-200 hover:bg-gray-300 transition text-black rounded-full mt-3 py-1 cursor-pointer'>İptal</button>
        </div>
     </Modal>
     </>
  )
}

export default ForgotPassword;