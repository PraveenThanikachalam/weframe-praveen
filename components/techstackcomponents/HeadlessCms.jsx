import React from 'react'
import Image from 'next/image'


const HeadlessCms = () => {
  return (
    <div className='w-[80%]  rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center justify-start'>
      <img src='/assets/techstack/effect.svg' className='absolute top-0 left-0 ' alt="" />
      <div className='w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center justify-start'>
        <h2>HEADLESS CMS</h2>
      </div >
      <div className='flex w-full flex-col items-center justify-center  '>

        <div className='flex mt-12 w-full flex-wrap items-center gap-20 justify-center '>
          <div className='flex flex-wrap items-center justify-start gap-32 w-full'>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image width={50} height={70} src="/assets/techstack/cms/cms1.svg" alt="" />
              <p className='text-sm text-gray-500'>React</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image width={50} height={70} src="/assets/techstack/cms/cms2.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image width={50} height={70} src="/assets/techstack/cms/cms3.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image width={50} height={70} src="/assets/techstack/cms/cms4.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image width={50} height={70} src="/assets/techstack/cms/cms5.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
            <div className='flex flex-col h-24  items-center justify-between '>
              <Image width={50} height={70} src="/assets/techstack/cms/cms6.svg" alt="" />
              <p className='text-sm text-gray-500'>Flutter</p>
            </div>
          </div>

          <div className='flex  flex-wrap items-center justify-start w-full gap-32 '>
          <div className='flex flex-col h-24  items-center justify-between '>
            <Image width={50} height={70} src="/assets/techstack/cms/cms7.svg" alt="" />
            <p className='text-sm text-gray-500'>Flutter</p>
          </div>
          <div className='flex flex-col h-24  items-center justify-between '>
            <Image width={50} height={70} src="/assets/techstack/cms/cms8.svg" alt="" />
            <p className='text-sm text-gray-500'>Flutter</p>
          </div>
          </div>

        

        </div>
      </div>
    </div>
  )
}

export default HeadlessCms
