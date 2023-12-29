'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DropDownBig from './navbar/DropDownBig';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-opacity-25 z-40 bg-[#020c0d]  bg-transparent backdrop-blur-sm">
      <div className="w-full flex items-center justify-between text-white py-6 px-10">
        <div>
          <Link href={'/'} aria-label="Website logo">
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
          <div className="gap-16 flex text-sm font-medium items-center justify-center">
            <div
              onClick={() => {
                setVisible(!visible);
              }}
              className="cursor-pointer flex gap-1 items-center justify-center"
            >
              Services{' '}
              <div
                className={`transition-all duration-300 ${
                  visible ? 'rotate-180' : ''
                }`}
              >
                <Image
                  alt="img"
                  src={'/icons/dropdown.svg'}
                  width={200}
                  height={300}
                  className="w-3 h-auto"
                />
              </div>
            </div>
            <Link href={'/case-study'} aria-label="case studies">
              Case Studies
            </Link>
            <Link href={'/blogs'} aria-label="Blogs">
              Blogs
            </Link>
            <Link href={'/about'} aria-label="About Us">
              About Us
            </Link>
            <Link href={'/contact'} aria-label="Contact">
              Contact
            </Link>
          </div>
        </nav>
        <div className="flex items-center justify-center gap-5 lg:hidden">
         
          <Image
            onClick={() => {
              setVisible2(!visible2);
            }}
            alt="img"
            src={'/icons/menu.svg'}
            width={200}
            height={300}
            className="h-8 w-auto cursor-pointer"
          />
        </div>
      </div>

      <MobileNav visible2={visible2} setVisible2={setVisible2} />
      <DropDownBig visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Navbar;
