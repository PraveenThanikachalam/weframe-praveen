import Image from 'next/image';
import MobileBg from './mobile-bg';
import Bg from '@/public/for-space-hero/MobileBackground.png';
import { sf_pro } from '@/fonts';
import { Bodoni_Moda } from 'next/font/google';
import localFont from 'next/font/local';
import MobileNav from './mobile-nav';
import FlashButton from './FlashButton';
import Companies from './Companies';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
});

export default function MobileHerosection() {
  return (
    <div
      className={`${sf_pro.className} w-full h-[100vh] relative overflow-hidden z-0 bg-[#020708]`}
    >
      <MobileBg />
      <div className="absolute top-0 h-full w-full flex items-center flex-col justify-center -translate-y-16 ">
        <span className="text-[32px] font-bold text-white">
          Jamstack & Headless
        </span>
        <span className="text-[32px] font-semibold text-[#A8ACAD]">
          {' '}
          Commerce{' '}
          <span
            className={`${bodoni.className} italic bg-gradient-to-b from-[#1BC7C7] to-[#41BBEF] bg-clip-text text-transparent font-semibold`}
          >
            Specialists
          </span>
        </span>
        <span className="text-center md:w-[530px] break-words align-middle text-[14px] bg-gradient-to-b p-2 from-white to-white/30 leading-6 z-10 bg-clip-text text-transparent ">
          Welcome to WeframeTech—where we build cutting-edge, high-performance
          websites engineered to elevate your business into the top 1%.
        </span>
        <FlashButton />
        <div className='absolute w-full h-full items-end flex z-40 translate-y-12'>
          <Companies />
        </div>
      </div>
    </div>
  );
}
