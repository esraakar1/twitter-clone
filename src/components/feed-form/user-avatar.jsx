import React from 'react'

const UserAvatar = ({ photo, name, designs }) => {
  return (
     <img className={`size-[35px] md:size-[45px] rounded-full ${designs}`} src={photo} alt={name} />
  )
}

export default React.memo(UserAvatar);