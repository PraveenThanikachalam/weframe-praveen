'use client';
import React, { useState, lazy, Suspense } from 'react';

const TechStackCard = lazy(() =>
  import('@/components/HomePage/techstackcomponents/TechStackCard')
);

const TechStack = ({ techData }) => {
  const [shift, setShift] = useState(false);

  const webFrameworks = techData?.section2_contents?.filter(
    (tech) => tech.development_platform_id.key === 'Web'
  ) ?? [[]];
  const mobileFrameworks = techData?.section2_contents?.filter(
    (tech) => tech.development_platform_id.key === 'Mobile'
  ) ?? [[]];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="techStack w-full py-16 px-4 flex flex-col gap-5 md:gap-10 items-center justify-center">
        <div className="w-full max-w-screen-xl text-center flex flex-col gap-5 md:gap-10 items-center justify-center">
          <h1 className="lg:text-4xl text-3xl md:text-4xl font-bold text-white">
            {techData?.section2_heading}
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
        <div className="techstackComponents max-w-screen-xl w-full flex flex-col items-center justify-center lg:gap-12 gap-8">
          {!shift ? (
            <>
              {webFrameworks[0]?.development_platform_id?.sections?.map(
                (plat, index) => (
                  <TechStackCard
                    key={index}
                    framework={plat.technologies}
                    title={plat.heading}
                  />
                )
              )}
            </>
          ) : (
            <>
              {mobileFrameworks[0]?.development_platform_id?.sections?.map(
                (plat, index) => (
                  <TechStackCard
                    key={index}
                    framework={plat.technologies}
                    title={plat.heading}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default TechStack;
