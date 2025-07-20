import React, { useState } from 'react'
import EmailInput from './email-input';
import PasswordInput from './password-input';
import AuthToggle from './auth-toggle';
import ForgotPassword from '../../pages/login/forgot-password';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
    const navigate = useNavigate();
    // kaydolma modunda mıyız
    const [isSignUp, setIsSignUp] = useState(false);

     const handleSubmit = async (e) => {
        e.preventDefault();

        // FormData nesnesi oluşturur. Bu, HTML formundaki tüm input verilerini temsil eder.
        
        // e.target, formun kendisidir. Yani bu satır, form içindeki input'ları yakalayıp formData nesnesine aktarır.

        const formData = new FormData(e.target);

        const { email, password } = Object.fromEntries(formData.entries());

        try {    
        if(isSignUp) {

          // eğer kaydolma modundaysak: Hesap oluştur
         const res = await createUserWithEmailAndPassword(auth, email, password);

        //  email doğrulama e postası gönder
        await sendEmailVerification(res.user);

        toast.info("Mail'inize doğrulama e-postası gönderildi");

        // giriş yap butonuna geç
         setIsSignUp(false);

        // bildirim gönder
        } else {
            // giriş modundaysa oturum aç
        const res = await signInWithEmailAndPassword(auth, email, password); 

        // mailini doğrulamamışsa bildirim gönder
        if (!res.user.emailVerified) {
            return toast.info("e-posta adresinizi doğrulayın");
        } 
        // mailini doğrulamamışsa anasayfaya yönlendir
            navigate("/feed");
            toast.success("Oturumunuz Açıldı");
      }    
      
      e.target.reset()
      }  catch (error) {
        toast.error("Hata:" + error.code);
      }
    };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col  '>
       <EmailInput />

       <PasswordInput />

     {!isSignUp ? <ForgotPassword /> : <div className='h-[28px] w-1' /> }
       
           <button className='mt-10 mb-5 bg-white text-black font-bold transition hover:bg-gray-300 cursor-pointer rounded-full p-1' type='submit'>
            {isSignUp ? "Kaydol" : "Giriş Yap"}
           </button>
      <AuthToggle isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    </form>
  )
}

export default Form;