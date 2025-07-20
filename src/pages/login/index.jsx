import React from 'react'
import GoogleButton from './google-button';
import Form from '../../components/login-form';


const Login = () => {

  return (
    <div className='h-screen bg-[#242424] text-white grid place-items-center px-4 '>
         <div className='bg-black py-16 px-28 rounded-lg flex flex-col gap-10 sm:w-[80%] max-w-[550px]'>
            <div className='flex justify-center'>
                <img className='h-[60px] ' src="/logo.webp" alt="logo" />
            </div>
            <h1 className='text-lg font-bold text-center'>Twitter'a Giriş Yap</h1>

            <GoogleButton />
   
             <Form /> 
            
         </div>
    </div>
  )
}

export default Login