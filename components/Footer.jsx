import React from 'react'

const Footer = () => {
  return (
    <div className='footer w-full h-96 p-10 flex flex-col items-center justify-center text-white '>
        <div className='w-[90%] flex items-center justify-end'>
            <div className='flex gap-8 font-light text-gray-300'>
                <ul className='flex flex-col gap-8'>
                    <li>Jamstack</li>
                    <li>Headless Commerce</li>
                    <li>Get Instant Quotation</li>
                </ul>
                <ul className='flex flex-col gap-8'>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>Blogs</li>
                </ul>
                <ul className='flex flex-col gap-8'>
                    <li>Careers</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='h-[1px] bg-gray-500 w-[90%] mt-10' >

        </div>
        <div className='text-gray-500  mt-10 flex items-center justify-between w-[90%]'>
            <p className='text-sm'>2023 WeFrame Tech, All rights reserved.</p>
            <ul className='flex gap-5'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
            </ul>

        </div>
      
    </div>
  )
}

export default Footer
