import React, { useState } from 'react'
import { AiOutlineEye as Open} from "react-icons/ai";
import { AiOutlineEyeInvisible as Closed } from "react-icons/ai";

const PasswordInput = () => {

    const [isShow, setIsShow] = useState(false);

  return (
    <div className='mt-5'>
      <label>Şifre</label>
      <div className='relative'>
      <input type={isShow ? "text" : "password"} name='password' className='input' />

      <span onClick={() => setIsShow(!isShow)} className='absolute end-2 top-[50%] translate-y-[-35%] text-zinc-700 text-xl cursor-pointer'>
      {isShow ? <Open /> : <Closed />}

      </span>
      </div>
      </div>
  )
}

export default PasswordInput;