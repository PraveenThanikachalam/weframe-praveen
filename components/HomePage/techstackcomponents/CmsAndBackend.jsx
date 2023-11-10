import React from 'react';
import Image from 'next/image';

const CmsAndBackend = () => {
  return (
    <div className="w-full  bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D]  rounded-xl p-16 border relative border-gray-500 flex overflow-hidden items-center justify-start">
      <div className="w-full absolute text-white font-medium glow top-0 left-0 p-8 flex items-center justify-start ">
        <h2>HEADLESS CMS & BACKEND FRAMEWORK</h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center  ">
        <div className="flex mt-12 w-full flex-wrap items-center lg:gap-20 gap-5 justify-center ">
          <div className="flex flex-wrap items-center justify-between  lg:w-[90%]  gap-10 w-full">
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/cms/cms2.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Strapi</p>
            </div>

            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/cms/cms5.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Sanity</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/cms/cms6.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Dato CMS</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/cms/cms7.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Prismic</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/cms/cms8.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Directus</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/backend/back2.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Node Js</p>
            </div>
          </div>

          <div className="flex  flex-wrap items-center lg:justify-start justify-center lg:w-[90%] w-full gap-10 mt-4 lg:mt-0 ">
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/backend/back1.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Supabase</p>
            </div>
            <div className="flex flex-col lg:h-24 h-20   items-center justify-between ">
              <Image
                width={0}
                height={0}
                className="lg:h-12 md:h-12 h-10 w-auto"
                src="/assets/techstack/backend/back3.svg"
                alt=""
              />
              <p className="text-sm text-gray-500">Golang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsAndBackend;
