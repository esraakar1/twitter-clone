import React from 'react'
import { navSections } from '../../utils/constants';
import { getUserName } from '../../utils/helpers';
import { IoMdExit as Exit } from "react-icons/io";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Nav = ({user}) => {
  return (
    <nav className='flex flex-col justify-between items-end px-2 py-4'>
        <div>
            <img src="./logo.webp" alt="x" className='w-14 mb-4' />

            {navSections.map((item,key) => (
              <div className='flex items-center text-2xl cursor-pointer transition max-md:justify-center gap-3 rounded-lg md:text-xl p-3 hover:bg-tw-gray ' key={key}>
                {item.icon} 
                <span className='whitespace-nowrap max-md:hidden'>{item.title}</span>
              </div>
            ))}
        </div>

        {/* user */}
        <div>
          
          <div className='flex max-md:flex-col gap-4 justify-between'>
            <div className='flex gap-2'>
            <img className='rounded-full max-w-[45px]' src={user?.photoURL} alt={user.displayName} />

            <div className=''>
            <p className='max-md:hidden text-sm'>{user.displayName} </p>
            <p className='max-md:hidden text-sm text-zinc-400'>{getUserName(user.displayName)} 
            </p>
            </div>

          </div>
          <button 
          onClick={() => signOut(auth)}
          className='text-xl justify-center flex text-center cursor-pointer' title="Çıkış Yap" >
            <Exit />
          </button>
        </div>
        </div>
    </nav>
  )
}

export default Nav