import React from 'react';
import Image from 'next/image';

const MobileFrameworks = () => {
  return (
    <div className="w-full mt-16 bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D] rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center  justify-center">
      <div className="w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center  justify-start">
        <h2>MOBILE FRAMEWORKS</h2>
      </div>
      <div className="flex flex-col items-start  lg:w-[90%] w-full  justify-center  ">
        <div className="flex mt-12 items-center  justify-center gap-24 ">
          <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
            <Image
              className="lg:h-12 md:h-12 h-10 w-auto"
              width={0}
              height={0}
              src="/assets/techstack/mobile/react.svg"
              alt=""
            />
            <p className="text-sm text-gray-500">React</p>
          </div>
          <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
            <Image
              className="lg:h-12 md:h-12 h-10 w-auto"
              width={0}
              height={0}
              src="/assets/techstack/mobile/flutter.svg"
              alt=""
            />
            <p className="text-sm text-gray-500">Flutter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFrameworks;
