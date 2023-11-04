import React from 'react'

const StoryCard = () => {
  return (
    <div className='w-[80%] border border-white rounded-xl flex h-[75vh]'>
      <div className='w-[40%] flex p-10 flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold text-white'>Freemium Blog Platform for Entrepreneurs</h1>
        <div className='flex gap-2 my-3 flex-wrap'>
          <button className="bg-black border border-white text-white px-4 py-2 rounded-xl">Headless CMS</button>
          <button className="bg-black border border-white text-white px-4 py-2 rounded-xl">Jamstack</button>
          <button className="bg-black border border-white text-white px-4 py-2 rounded-xl">Blog Platform</button>
          <button className="bg-black border border-white text-white px-4 py-2 rounded-xl">Web App Development</button>
        </div>
        <p className='text-sm text-gray-300'>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients. Wave farewell to the past and step confidently into the future with Jamstack. Beyond websites, we're here to bring your narrative to life through our expertise. Get an instant quote for your project</p>
        <div className='flex mt-5 items-center justify-between w-full'>
            <div className='flex gap-3 text-white'>
                <div className='w-12 h-12 rounded-full border flex items-center justify-center border-white'><i class="ri-arrow-left-line"></i></div>
                <div className='w-12 h-12 rounded-full border flex items-center justify-center border-white'><i class="ri-arrow-right-line"></i></div>
            </div>
            <button className='w-36 rounded-full px-4 py-3 bg-white  font-medium'>Read</button>
        </div>
      </div>
      <div className='w-[60%] flex items-center justify-center'>
        <img className='w-[90%]' src="/assets/img1.png" alt="" />
      </div>
    </div>
  )
}

export default StoryCard
