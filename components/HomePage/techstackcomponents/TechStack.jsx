'use client';
import React, { useState } from 'react';
import TechSections from './TechSections';

const TechStack = ({ techData }) => {
  const [shift, setShift] = useState(false);

  const webFrameworks = techData?.section2_contents?.filter(
    (tech) => tech.development_platform_id.key === 'Web'
  ) ?? [[]];
  const mobileFrameworks = techData?.section2_contents?.filter(
    (tech) => tech.development_platform_id.key === 'Mobile'
  ) ?? [[]];

  return (
    <div className="techStack w-full flex flex-col gap-5 md:gap-10 items-center justify-center">
      <div className="w-full  text-center flex flex-col gap-5 md:gap-10 items-center justify-center">
        <h1 className="lg:text-4xl text-3xl md:text-4xl font-bold text-white">
          {techData?.section2_heading ?? 'How we develop for'}
        </h1>
        <div className="rounded-xl relative border overflow-hidden w-64 h-12 border-gray-400 flex items-center justify-center">
          <div
            className={`w-[50%] h-full absolute right-0 slide z-10 bg-white ${
              shift ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-200`}
          ></div>
          <div
            onClick={() => {
              setShift(!shift);
            }}
            className={`flex items-center z-20 justify-center transition-all duration-200  font-semibold cursor-pointer text-md w-[50%] h-full rounded-r-xl ${
              shift ? 'text-white' : ' text-black'
            } `}
          >
            Web
          </div>
          <div
            onClick={() => {
              setShift(!shift);
            }}
            className={`flex items-center justify-center transition-all duration-200 z-20 font-semibold cursor-pointer text-md w-[50%] h-full rounded-l-xl ${
              shift ? ' text-black' : 'text-white'
            } `}
          >
            Mobile
          </div>
        </div>
      </div>

      <TechSections
        shift={shift}
        webFrameworks={webFrameworks}
        mobileFrameworks={mobileFrameworks}
      />
    </div>
  );
};

export default TechStack;
