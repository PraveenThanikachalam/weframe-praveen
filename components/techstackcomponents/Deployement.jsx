import React from 'react'
import Image from 'next/image'


const Deployement = () => {
  return (
    <div className='w-[80%]  borderGrd  rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center justify-start'>
      <img src='/assets/techstack/effect.svg' className='absolute top-0 left-0 ' alt="" />
      <div className='w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center justify-start'>
        <h2>DEPLOYMENT FRAMEWORKS</h2>
      </div >
      <div className='flex w-full flex-col items-center justify-center  '>

        <div className='flex mt-12 w-full flex-wrap items-center gap-20 justify-center '>
          <div className='flex flex-wrap items-center lg:justify-start justify-center lg:gap-32 gap-10 w-full'>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev1.svg" alt="" />
              <p className='text-sm text-gray-500'>React</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev2.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev3.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev4.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev5.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev6.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
          </div>

          <div className='flex  flex-wrap items-center lg:justify-start justify-center lg:gap-32 gap-10 w-full '>
          <div className='flex flex-col h-24  items-center justify-between '>
            <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev7.svg" alt="" />
            <p className='text-sm text-gray-500'>Flutter</p>
          </div>
          <div className='flex flex-col h-24  items-center justify-between '>
            <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev8.svg" alt="" />
            <p className='text-sm text-gray-500'>Flutter</p>
          </div>
          <div className='flex flex-col h-24  items-center justify-between '>
            <Image className='h-auto w-10' width={0} height={0} src="/assets/techstack/deployment/dev9.svg" alt="" />
            <p className='text-sm text-gray-500'>Flutter</p>
          </div>
          </div>

        

        </div>
      </div>
    </div>
  )
}

export default Deployement
