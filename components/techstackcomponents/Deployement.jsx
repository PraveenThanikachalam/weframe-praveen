import React from 'react';
import Image from 'next/image';

const Deployement = () => {
  return (
    <div className="w-full  bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D]  rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center justify-start">
      <div className="w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center justify-start">
        <h2>DEPLOYMENT FRAMEWORKS</h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center  ">
        <div className="flex mt-12 w-full flex-wrap items-center gap-20 justify-center ">
          <div className="flex flex-wrap items-center justify-between lg:w-[90%]  gap-10 w-full">
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                className="lg:h-12 md:h-12 h-10 w-auto"
                width={0}
                height={0}
                src="/assets/techstack/deployment/dev3.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Netlify</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                className="lg:h-12 md:h-12 h-10 w-auto"
                width={0}
                height={0}
                src="/assets/techstack/deployment/dev4.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Vercel</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                className="lg:h-12 md:h-12 h-10 w-auto"
                width={0}
                height={0}
                src="/assets/techstack/deployment/dev5.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Digital Ocean</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                className="lg:h-12 md:h-12 h-10 w-auto"
                width={0}
                height={0}
                src="/assets/techstack/deployment/dev8.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">AWS</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                className="lg:h-12 md:h-12 h-10 w-auto"
                width={0}
                height={0}
                src="/assets/techstack/deployment/dev9.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deployement;
