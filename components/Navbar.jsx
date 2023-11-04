'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [visible,setVisible] = useState(false)
  return (
    <div className='w-full z-50 navbar flex items-center relative justify-between text-white p-10'>
      <div>
            <img src="/assets/logo.svg" alt="" />
      </div>
      <nav >
        <ul className='gap-16 flex text-sm font-medium items-center justify-center'>
        <Link href={'/'} onClick={()=>{setVisible(!visible)}}>Services <i class="ri-arrow-down-s-line"></i></Link>
        <Link href={'/'}>Case Studies</Link>
        <Link href={'/blogs'}>Blogs</Link>
        <Link href={'/'}>About Us</Link>
        <Link href={'/'}>Contact</Link>
        </ul>
      </nav>
      <div className={`absolute w-[95%]  p-10 navbar gap-5 ${visible ? 'flex' : 'hidden'} flex-wrap items-start justify-center top-20 `}>
          <div className='rounded-xl w-[45%] border-2 p-8 relative border-gray-500 flex items-center justify-center'>
          <i class="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
            <div>

            <h1 className='text-xl font-semibold text-white'>Jamstack Development</h1>
            <p className='text-sm font-light text-gray-300 mt-1 '>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
            
            </div>

          </div>
          <div className='rounded-xl w-[45%] border-2 p-8 relative border-gray-500 flex items-center justify-center'>
          <i class="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
            <div>

            <h1 className='text-xl font-semibold text-white'>MVP & POC Development</h1>
            <p className='text-sm font-light text-gray-300 mt-1 '>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
            
            </div>

          </div>
          <div className='rounded-xl w-[45%] border-2 p-8 relative border-gray-500 flex items-center justify-center'>
          <i class="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
            <div>

            <h1 className='text-xl font-semibold text-white'>Headless Commerce</h1>
            <p className='text-sm font-light text-gray-300 mt-1 '>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
            
            </div>

          </div>
          <div className='rounded-xl w-[45%] border-2 p-8 relative border-gray-500 flex items-center justify-center'>
          <i class="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
            <div>

            <h1 className='text-xl font-semibold text-white'>UI/UX Designing</h1>
            <p className='text-sm font-light text-gray-300 mt-1 '>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
            
            </div>

          </div>
          <div className='rounded-xl w-[45%] border-2 p-8 relative border-gray-500 flex items-center justify-center'>
          <i class="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
            <div>

            <h1 className='text-xl font-semibold text-white'>Custom Software Development</h1>
            <p className='text-sm font-light text-gray-300 mt-1 '>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
            
            </div>

          </div>
          <div className='rounded-xl w-[45%] border-2 p-8 relative border-gray-500 flex items-center justify-center'>
          <i class="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
            <div>

            <h1 className='text-xl font-semibold text-white'>CTO as a Service</h1>
            <p className='text-sm font-light text-gray-300 mt-1 '>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
            
            </div>

          </div>
      </div>
    </div>
  )
}

export default Navbar
