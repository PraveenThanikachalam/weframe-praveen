'use client';

import { useState } from 'react';
import Image from 'next/image';
import MatrixBG from './MatrixBG';
import CardOuter from '@/public/for-space-hero/CardOuter.png';
import CardOuter2 from '@/public/for-space-hero/CardOuter2.png';
import BgGradient from '@/public/for-space-hero/BgGradient.png';
import Link from 'next/link';
import localFont from 'next/font/local';

const sf_pro = localFont({
  src: '../../../fonts/sf_pro/sf_pro.woff2',
  display: 'swap',
  weight: '100',
  variable: '--sf-pro',
});

export default function ServiceDropdown({ title, content, url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={url}
      className="relative md:h-[110px] h-[50px] w-auto backdrop-blur-sm rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="absolute w-full"
        src={CardOuter}
        alt="Card outer border"
      />

      <Image
        className={`absolute bottom-0 w-full transition-all duration-900 delay-100 px-[2px] ease-in-out ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        src={CardOuter2}
        alt="Card outer hover effect"
      />

      <Image
        className={`absolute bottom-0 w-full left-1/2 -translate-x-1/2 transition-all duration-1000 delay-100 ease-in-out ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        src={BgGradient}
        alt="Background gradient"
      />

      <div className="absolute inset-0 p-[1px]">
        <div className="h-full w-full z-10 rounded-xl bg-transparent">
          <div className="z-20 absolute text-start px-3 py-3">
            <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white/60 via-white/60 to-black">
              {title ? title : 'Title comes here...'}
            </h1>
            <p className={`${sf_pro.className} hidden md:flex text-md text-white/25`}>
              {content ? content : 'Explore digital Content comes here...'}
            </p>
          </div>
          <div className="absolute inset-0 z-10">
            <MatrixBG isHovered={isHovered} />
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-xl bg-transparent transition-opacity duration-500 ${
          isHovered ? 'bg-opacity-20' : 'bg-opacity-0'
        }`}
      />
    </Link>
  );
}
