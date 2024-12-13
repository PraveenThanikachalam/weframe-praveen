import Image from 'next/image';
import React from 'react';
import MidGrid from '@/public/for-space-hero/MidGrid2.png';
import BottomGrid from './BottomGrid';
import Star from '@/public/for-space-hero/stars.png';
export default function MobileBg() {
  return (
    <div className="w-full h-full relative flex items-start justify-center overflow-hidden">
      {/* Container to center the image */}
      <div className="relative">
        <div className="mask">
          {/* Image centered and fixed size */}
          <Image
            className="z-30 object-cover bg-[#0e1a1d]"
            width={800} // Fixed width
            height={250} // Fixed height
            src={'/assets/for-space-hero/TopGrid2.png'}
            alt="masked"
          />
          <div className="blurred-div w-full"></div>
        </div>
      </div>
      <div className="w-full h-full absolute flex items-center justify-center z-10">
        <Image
          src={MidGrid}
          alt=""
          className="w-[400px] h-[400px] absolute"
          width={500}
          height={500}
        />
      </div>
      <div className="z-10 absolute flex items-end justify-end h-full translate-y-16">
        <BottomGrid />
      </div>
      <Image src={Star} alt="" className='w-full h-full absolute' />

      <div className="radial -top-20 -right-15 absolute w-[600px] h-[700px]"></div>
      <div className="radialbottom absolute -bottom-24 w-[600px] h-[200px]"></div>
    </div>
  );
}
