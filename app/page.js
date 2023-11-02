import Image from 'next/image'

export default function Home() {
  return (
    <main>

   <div className='pattern z-40 text-center text-white w-full min-h-[92vh] flex items-center justify-center'>
    <div className='w-[60%] flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-extrabold'>Jamstack & Headless <br /> Commerce Agency</h1>
      <p className='text-sm my-7 text-gray-300'>We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.</p>
      <div className='gap-5 flex'>
        <button className=' px-5 w-48 py-3 font-medium text-black bg-white rounded-full'>Instant Quotation</button>
        <button className='px-5 w-48 py-3 font-medium text-white glow border  bg-transparent rounded-full'>Case Studies</button>
      </div>
    </div>
   </div>
   {/* <div className='sec2 w-full h-[50vh] flex items-center justify-center bg-black text-white'>
    <div className='w-[40%] flex flex-col items-center justify-center'>
      <p>Trusted by</p>
      <div>

      </div>
      <div className='line w-[70%] h-[0px] bg-green-600'></div>
    </div>
   </div> */}
   </main>
  )
}
