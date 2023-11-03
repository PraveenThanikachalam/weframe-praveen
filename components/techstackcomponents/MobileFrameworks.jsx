import React from 'react'
import Image from 'next/image'

const MobileFrameworks = () => {
  return (
    <div className='w-[80%] mt-16  rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center justify-start'>
        <img src='/assets/techstack/effect.svg' className='absolute top-0 left-0 ' alt="" />
         <div className='w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center justify-start'>
            <h2>MOBILE FRAMEWORKS</h2>
        </div>
      <div className='flex flex-col items-center justify-center  '>
       
        <div className='flex mt-12 items-center  justify-center gap-24 '>
            <div className='flex flex-col h-24  items-center justify-between '>
                <Image width={50} height={70}  src="/assets/techstack/react.svg" alt="" />
                <p className='text-sm text-gray-500'>React</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
                <Image width={50} height={70}  src="/assets/techstack/flutter.svg" alt="" />
                <p className='text-sm text-gray-500'>Flutter</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileFrameworks
