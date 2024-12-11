'use client';

import TopGridCTA from '@/public/NewCTA/TopGridCTA.png';
import BottomGridCTA from '@/public/NewCTA/BottomGridCTA.png';
import MidGrid from '@/public/NewCTA/MidGrid.png';
import PointVector from '@/public/NewCTA/PointVector.png';
import localFont from 'next/font/local';
import Image from 'next/image';
import FlashButton from './space-hero-ui/FlashButton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/public/updated.png';

const sf_pro = localFont({
  src: '../../fonts/sf_pro/sf_pro.woff2',
  display: 'swap',
  weight: '100',
  variable: '--sf-pro',
});

export default function NewCTA() {
  return (
    <div
      className={`h-full relative md:w-[90%] md:bg-[#020C0D] md:rounded-3xl w-full overflow-hidden flex flex-col pb-20 items-center justify-center ${sf_pro.className}`}
    >
      <motion.div
        className="top-gradient"
        initial={{ opacity: 0, y: -200 }} // Start hidden and above the viewport
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth entry
      />{' '}
      <div className="relative h-full w-full flex items-center justify-center flex-col">
        <Image
          className="w-full brightness-75 absolute top-0"
          src={TopGridCTA}
          alt=""
        />
        <Image
          src={MidGrid}
          className=" items-center w-[30%] h-[30%] justify-center"
          alt=""
        />
        <Image
          className="w-full brightness-75 absolute bottom-0 translate-y-20"
          src={BottomGridCTA}
          alt=""
        />
      </div>
      <div className="absolute items-center flex flex-col gap-2 justify-center p-2 text-center">
        <h1 className="text-transparent bg-gradient-to-b from-white via-white to-black bg-clip-text text-3xl md:text-7xl">
          Tap into Jamstack
        </h1>
        <p className="text-[#9B96B0] text-lg md:text-2xl tracking-wide">
          Get started with WeframeTech—unlock the future of web development
          through Jamstack.
        </p>
        <div className="w-full items-center justify-center flex translate-y-14">
          <Link
            href={
              'https://calendly.com/vipuluthaiah/weframe-tech?month=2024-10'
            }
            className="animated-border-box-cta w-[200px] md:w-[280px] h-[75px]"
          >
            <div className="flashlight" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <p className="text-white text-md md:text-lg font-bold">
                Book a Meeting
              </p>
            </div>
          </Link>
        </div>

        <p className="text-white/50 tracking-wide text-xs flex gap-1 items-center justify-center translate-y-24">
          No credit card required{' '}
          <span>
            <Image className="w-3 h-3" src={PointVector} alt="" />{' '}
          </span>{' '}
          14-days free trial
        </p>
      </div>
      <motion.div
        className="bottom-gradient"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />{' '}
    </div>
  );
}
