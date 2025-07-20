import React from 'react'
import UserAvatar from '../feed-form/user-avatar'
import UserInfo from './user-info'
import DropDown from './dropdown'
import Content from './content'
import Buttons from './buttons'

const Post = ({tweet}) => {
  return (
    <div className='border-b border-tw-gray p-4 flex gap-2'>
        <UserAvatar photo={tweet.user.photo} name={tweet.user.name}  />

        <div className='w-full'>
            <div className='flex justify-between'>
                <UserInfo tweet={tweet} />
                <DropDown tweet={tweet} />
            </div>
            
               <Content data={tweet.content} />

               <Buttons tweet={tweet} />
        </div>
    </div>
  )
}

export default Post