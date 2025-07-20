import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../../firebase';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const GoogleButton = () => {

  const navigate = useNavigate();
   
const handleGoogle = () => {
  signInWithPopup(auth, provider)
  .then(() => {
    navigate("/feed");
  });
  toast.success("Oturumunuz Açıldı");
};

  return (
    <button onClick={handleGoogle} className='bg-white flex items-center justify-center py-2 px-10 rounded-full text-black hover:bg-gray-200 whitespace-nowrap gap-x-3 cursor-pointer transition'>
      <img className='h-[20px]' src="/google-logo.png" alt="google-logo" />
      <span>Google İle Giriş Yap</span>
    </button>
  );
};

export default GoogleButton;" "