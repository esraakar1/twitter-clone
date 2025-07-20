import React from 'react'
import { IoMdClose } from 'react-icons/io';

const ImagePreview = ({image, clearImage}) => {
  return (
    image && (
    <div className='relative mb-5'>
        <button 
        onClick={clearImage}
        className='absolute top-3 rounded-full transition hover:bg-zinc-800 bg-primary/90 p-3 end-3 cursor-pointer'
        type='button'>
            <IoMdClose />
        </button>
        <img src={image} />
    </div>
    )
  )
}

export default ImagePreview;