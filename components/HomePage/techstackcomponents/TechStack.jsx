'use client';
import React, { useState } from 'react';
import Deployement from '@/components/HomePage/techstackcomponents/Deployement';
import CmsAndBackend from './CmsAndBackend';
import MobileFrameworks from '@/components/HomePage/techstackcomponents/MobileFrameworks';
import WebFrameworks from '@/components/HomePage/techstackcomponents/WebFrameworks';

const TechStack = () => {
  const [shift, setShift] = useState(false);
  return (
    <div className="techStack max-w-screen-xl w-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-full text-center flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl text-2xl md:text-4xl font-bold text-white">
          How we <br className="block lg:hidden" /> develop for
        </h1>
        <div className="rounded-xl border w-56 h-12 mt-4 border-gray-400 flex items-center justify-center">
          <div
            onClick={() => {
              setShift(!shift);
            }}
            className={`flex items-center justify-center font-semibold cursor-pointer text-md w-[50%] h-full rounded-l-xl ${
              shift ? 'bg-white text-black' : 'text-gray-300 '
            } `}
          >
            Web
          </div>
          <div
            onClick={() => {
              setShift(!shift);
            }}
            className={`flex items-center justify-center font-semibold cursor-pointer text-md w-[50%] h-full rounded-r-xl ${
              shift ? 'text-gray-300 ' : 'bg-white text-black'
            } `}
          >
            Mobile
          </div>
        </div>
      </div>{' '}
      cursor-pointer
      <div className="techstackComponents w-full flex flex-col items-center justify-center lg:gap-12 gap-8">
        {shift ? <WebFrameworks /> : <MobileFrameworks />}
        <CmsAndBackend />
        <Deployement />
      </div>
    </div>
  );
};

export default TechStack;
