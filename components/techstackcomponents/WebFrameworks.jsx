import React from 'react';
import Image from 'next/image';

const WebFrameworks = () => {
  return (
    <div className="w-full  mt-16  bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D]  rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center justify-start">
      <div className="w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center justify-start">
        <h2>FRONTEND FRAMEWORKS</h2>
      </div>
      <div className="flex w-full  flex-col items-center justify-center  ">
        <div className="flex mt-12 w-full flex-wrap items-center gap-20 justify-center ">
          <div className="flex flex-wrap  items-center lg:w-[90%] w-full justify-between   gap-10 ">
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/web/web1.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Astro</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/web/web2.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Nuxt</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/web/web3.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Sveltekit</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/web/web4.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Next Js</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/web/web5.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Gatsby</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20  items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/web/web6.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFrameworks;
