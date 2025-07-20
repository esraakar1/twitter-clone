import React from 'react'

const AuthToggle = ({isSignUp, setIsSignUp}) => {
  return (
    <div>
      <p>
        <span className='text-gray-500'>Hesabınız varsa</span>
        <span className='text-blue-500 ms-2 cursor-pointer hover:underline' onClick={() => setIsSignUp(!isSignUp)} >
            {isSignUp ? "Giriş Yapın" : "Kaydolun"}
        </span>
      </p>
    </div>
  )
}

export default AuthToggle;