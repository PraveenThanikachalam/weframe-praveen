import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full navbar flex items-center justify-between text-white p-6'>
      <div>
            <p>logo</p>
      </div>
      <nav >
        <ul className='gap-16 flex text-sm font-medium items-center justify-center'>
        <Link href={'/'}>Services <i class="ri-arrow-down-s-line"></i></Link>
        <Link href={'/'}>Case Studies</Link>
        <Link href={'/blogs'}>Blogs</Link>
        <Link href={'/'}>About Us</Link>
        <Link href={'/'}>Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
