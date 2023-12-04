import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MobileNav = ({ visible2, setVisible2 }) => {
  return (
    <div
      className={`absolute z-50 w-full h-96 animate-fade-in-down  top-0 bg-[#020c0d]  ${
        visible2 ? 'flex' : 'hidden'
      }  flex-col items-center justify-center gap-4`}
    >
      <Image
        onClick={() => {
          setVisible2(!visible2);
        }}
        alt="img"
        src={'/icons/close.svg'}
        width={200}
        height={300}
        className="w-6 absolute top-5 right-5"
      />

      <nav>
        <ul className="gap-8 p-6 rounded-xl glow flex flex-col text-white  text-sm font-medium items-center justify-center">
          <Link className="underline" href={'/case-study'}>
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
  );
};

export default MobileNav;
