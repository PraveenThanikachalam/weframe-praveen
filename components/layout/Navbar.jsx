'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DropDownBig from './navbar/DropDownBig';
import DropDownSmall from './navbar/DropDownSmall';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-opacity-25 z-40 bg-[#020c0d]  bg-transparent backdrop-blur-sm">
      <div className="w-full flex items-center justify-between text-white py-6 px-10">
        <div>
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
              className="cursor-pointer flex gap-1"
            >
              Services{' '}
              <div
                className={`transition-all duration-300 ${
                  visible ? 'rotate-180' : ''
                }`}
              >
                <i className={`ri-arrow-down-s-line`}></i>
              </div>
            </div>
            <Link href={'/case-study'}>Case Studies</Link>
            <Link href={'/blogs'}>Blogs</Link>
            <Link href={'/about'}>About Us</Link>
            <Link href={'/contact'}>Contact</Link>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-5 lg:hidden">
          <div
            onClick={() => {
              setVisible2(false);
              setVisible3(!visible3);
            }}
            className="flex items-center justify-center gap-1"
          >
            Services <i className="ri-arrow-down-s-line "></i>
          </div>

          <i
            onClick={() => {
              setVisible3(false);
              setVisible2(!visible2);
            }}
            className="ri-menu-4-line text-3xl"
          ></i>
        </div>
      </div>

      <MobileNav visible2={visible2} setVisible2={setVisible2} />
      <DropDownBig visible={visible} setVisible={setVisible} />
      <DropDownSmall visible3={visible3} setVisible3={setVisible3} />
    </div>
  );
};

export default Navbar;
