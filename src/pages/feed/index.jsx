import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useOutletContext } from 'react-router-dom'
import Nav from './nav'
import Main from './main'
import Aside from './aside'

const Feed = () => {

  // outlete context propu olarak gönderilen veriye erişme
  const user = useOutletContext();

  return (
    <div className="h-screen bg-primary overflow-hidden text-secondary grid grid-cols-[1fr_minmax(300px,600px)_1fr]">
     <Nav user={user} />
     <Main user={user} />
     <Aside user={user} />
    </div>
  )
}

export default Feed