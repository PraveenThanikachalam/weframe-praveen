'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const services = [
  {
    title:'Jamstack Development',
    desc:'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link:'/jamstack'
  },
  {
    title:'MVP & POC Development',
    desc:'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link:'/'

  },
  {
    title:'Headless Commerce',
    desc:'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link:'/headless'

  },
  {
    title:'UI/UX Designing',
    desc:'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link:'/'

  },
  {
    title:'Custom Software Development',
    desc:'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link:'/'

  },
  {
    title:'CTO as a Service',
    desc:'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link:'/'

  },
]

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

 
  return (
    <>
   
    <div  className="w-full sticky top-0 bg-opacity-25 z-50 bg-[#020c0d] mix-blend-screen bg-transparent backdrop-blur-sm flex items-center justify-between text-white py-6 px-10">
      <div >
        <Link href={'/'}>
          <Image
            width={32}
            height={32}
            className=" w-10 h-10"
            src="/assets/logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <nav className="hidden lg:block  ">
        <ul className="gap-16 flex text-sm font-medium items-center justify-center">
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className="cursor-pointer"
          >
            Services {visible ? <i class="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i> } 
          </div>
          <Link href={'/case-study'}>Case Studies</Link>
          <Link href={'/blogs'}>Blogs</Link>
          <Link href={'/about'}>About Us</Link>
          <Link href={'/contact'}>Contact</Link>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-5 lg:hidden">
        <Link
          href={'/'}
          onClick={() => {
            setVisible2(false);
            setVisible3(!visible3);

          }}
        >
          Services <i className="ri-arrow-down-s-line "></i>
        </Link>

        <i
          onClick={() => {
            setVisible3(false);
            setVisible2(!visible2);
          }}
          className="ri-menu-4-line text-3xl"
        ></i>
      </div>
    
     
    </div>
     <div
     
     className={`absolute laptop w-full animate-fade-in-down z-50  backdrop-blur-sm border-b border-gray-500 p-5 navbar gap-5 ${
       visible ? 'flex ' : 'hidden'
     } flex-wrap items-start justify-center top-24 `}
   >
    {
      services.map((item,index)=>{
        return  <div  key={index} style={{zIndex:'200'}} className=" rounded-xl w-[45%] borderGrd p-8 relative  flex items-center justify-center">
          <Image alt='img' src={'/assets/arrow.svg'} width={200} height={300} className='w-4 absolute top-4 right-4'/>
        <Link href={item.link}>
        
        <div>
          <h1 className="text-xl font-semibold text-white">
            {item.title}
          </h1>
          <p className="text-sm font-light text-gray-300 mt-1 ">
            {item.desc}
          </p>
        </div>
        </Link>
      </div>
      })
    }
    
     
   </div>

   <div
     className={`absolute z-50 w-full h-96 animate-fade-in-down  top-0 bg-[#020c0d]  ${
       visible2 ? 'flex' : 'hidden'
     }  flex-col items-center justify-center gap-4`}
   >
    <Image onClick={()=>{setVisible2(!visible2)}} alt='img' src={'/icons/close.svg'} width={200} height={300} className='w-6 absolute top-5 right-5'/>

     <nav >
       <ul className="gap-8 p-6 rounded-xl glow flex flex-col text-white  text-sm font-medium items-center justify-center">
         <Link className="underline" href={'/case-studies'}>
           Case Studies
         </Link>
         <Link className="underline" href={'/blogs'}>
           Blogs
         </Link>
         <Link className="underline" href={'/about'}>
           About Us
         </Link>
         <Link className="underline" href={'/contact'}>
           Contact
         </Link>
       </ul>
     </nav>
   </div>
   <div
        className={`absolute mobile w-full bg-[#020C0D] animate-fade-in-down z-50  navbar gap-2 p-5 ${
          visible3 ? 'flex' : 'hidden'
        } flex-wrap items-start justify-center left-0 top-16 `}
      >

        {
          services.map((item,index)=>{
            return   <Link className='w-full' href={item.link} key={index}><div  className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-between">
            <div>
              <h1 className="text-md font-semibold text-white">
                {item.title}
              </h1>
            </div>
          <Image alt='img' src={'/assets/arrow.svg'} width={200} height={300} className='w-4 '/>
          </div></Link> 
          })
        }
     
      
      </div>
   </>
  );
};

export default Navbar;
