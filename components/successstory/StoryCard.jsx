import React from 'react';
import Image from 'next/image';

const StoryCard = ({ slide, video }) => {
  return (
    <div className="w-full story-card-grd  border  border-gray-600 rounded-xl flex flex-col-reverse lg:flex-row p-5 ">
      <div className="lg:w-[40%] w-full flex lg:p-6 p-1 flex-col items-center justify-center">
        <h1 className="lg:text-2xl text-lg font-bold font-title-font text-white">
          Freemium Blog Platform for Entrepreneurs
        </h1>
        <div className="lg:flex md:flex hidden gap-2 my-3 flex-wrap">
          <button className="navbar borderGrd text-white px-4 py-2 rounded-xl">
            Headless CMS
          </button>
          <button className="navbar borderGrd text-white px-4 py-2 rounded-xl">
            Jamstack
          </button>
          <button className="navbar borderGrd text-white px-4 py-2 rounded-xl">
            Blog Platform
          </button>
          <button className="navbar borderGrd text-white px-4 py-2 rounded-xl">
            Web App Development
          </button>
        </div>
        <p className="text-sm mt-2 text-gray-300">
          Explore our real-world achievements, where we turn challenges into
          triumphs. These case studies highlight our track record of delivering
          impactful digital solutions for our clients. Wave farewell to the past
          and step confidently into the future with Jamstack. Beyond websites,
          we&apos;re here to bring your narrative to life through our expertise.
          Get an instant quote for your project
        </p>
        <div className="flex mt-5 items-center justify-between w-full">
          <div className={` gap-3 ${slide ? 'flex' : 'hidden'} text-white`}>
            <div className="w-12 h-12 rounded-full border flex items-center justify-center border-white">
              <i className="ri-arrow-left-line"></i>
            </div>
            <div className="w-12 h-12 rounded-full border flex items-center justify-center border-white">
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <button
            className={` ${
              slide
                ? 'w-36 bg-white hover:text-white hover:bg-transparent border border-gray-500'
                : 'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent '
            } rounded-full px-4 py-3 transition-all duration-150  font-medium`}
          >
            {video ? 'Play' : 'Read'}
          </button>
        </div>
      </div>
      <div className="lg:w-[60%] w-full py-2  lg:py-0 flex items-center justify-center">
        {video ? (
          <video width="0" height="0" className="w-[85%] h-[95%]" playsInline>
            <source src="/assets/demo.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            width={400}
            height={300}
            className=" h-auto w-[99%] lg:w-[85%]"
            src="/assets/img1.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default StoryCard;
