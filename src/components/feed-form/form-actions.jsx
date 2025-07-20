import React from 'react'
import { CiImageOn as Image } from 'react-icons/ci'
import { FaRegFaceSmileBeam as Smile} from "react-icons/fa6";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import Loader from '../loader';

const FormActions = ({isLoading, onImageChange, fileInputRef}) => {
  return (
    
             <div className='flex justify-between'>
              <div className=' text-blue-500 flex gap-4 text-xl '>
                <label
                htmlFor='image'
                   type='button'
                     className='form-icon'> 
                      <input
                      name='image'
                      onChange={onImageChange}
                      ref={fileInputRef}
                      id='image' type="file" className='hidden'/>
                     <Image />
                      </label>

                    <button
                    type='button'
                     className='form-icon'> <Gif /> </button>
                    <button
                    type='button'
                     className='form-icon'> <Smile /> </button>
                </div>
    
                <button
                disabled={isLoading}
                 className='bg-secondary font-bold px-5 rounded-full text-primary tracking-wide hover:brightness-70 min-w-[100px] transition cursor-pointer flex justify-center place-items-center'>

                {isLoading ? <Loader /> : "Gönder"}</button>
              </div>
  )
}

export default FormActions