import React from 'react'

const TextArea = () => {
  return (
    <textarea 
            className='w-full bg-transparent mb-2 md:text-lg text-zinc-300 outline-none resize-y min-h-[40px] max-h-[300px]'
            placeholder='Neler Oluyor?'
            name="text">
            </textarea>
  )
}

// bu component bir üst component ın render olmasından kaynaklı olarak gereksiz yere render oluyor memo() ile bunu engelledik
export default React.memo(TextArea);