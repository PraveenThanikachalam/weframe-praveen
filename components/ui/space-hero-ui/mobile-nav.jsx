import Image from 'next/image';
import React from 'react';
import NavLine from '@/public/for-space-hero/NavLine.png';
import Logo from '@/public/updated.png';

export default function MobileNavbar() {
  return (
    <div className="w-full h-[60px] sticky bg-white z-40 items-start">
      <div className=" ">
        <Image src={Logo} className="w-[130px] h-[25px]" />
      </div>
      <Image src={NavLine} alt="" className="w-full absolute z-40 bottom-0" />
    </div>
  );
}
