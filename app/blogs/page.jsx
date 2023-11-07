import NudgeCard from '@/components/NudgeCard';
import React from 'react';

const Blogs = () => {
  return (
    <main className='relative'>
      <div>
        <img src="/assets/matrix.svg" className='absolute -z-20 top-0' alt="" />
      </div>
      <div className="w-full lg:h-[60vh] md:h-[60vh] h-[80vh] flex items-center justify-center">
        <div className="lg:w-[70%] w-[90%] flex flex-col items-center justify-center">
          <div className=''>
            <h1 className="lg:text-5xl md:text-5xl text-4xl text-center font-bold text-cyan-200">
              Stay Ahead with Our Insights
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 w-full p-4 flex-wrap">
            <button style={{fontFamily: 'Fira Mono, monospace'}} className="px-4 py-2 rounded-2xl   bg-black text-white border border-cyan-300 shadow-cyan-300 shadow-sm md:text-sm text-xs lg:text-sm">
              All Articles
            </button>
            <button className="px-4 py-2 blogBtn borderGrd rounded-2xl   text-gray-500 md:text-sm text-xs lg:text-sm">
              Headless Commerce Development
            </button>
            <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
              Headless Commerce Development
            </button>
            <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
              MVP & POC Development
            </button>
            <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
              Custom Software Development
            </button>
            <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
              Product Design Services
            </button>
            <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
              CTO as a Service
            </button>
            <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
              API Development
            </button>
          </div>
        </div>
      </div>

      <div className="blogs w-full flex-wrap items-center flex gap-8 justify-center">
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog1.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog2.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog3.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog4.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog5.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog6.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%]  lg:w-[40vw] ">
          <div className=''>
            <img src={'/assets/blogs/blog7.png'} className=" w-full" />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-6 ">
            <div className="w-full">
              <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
                Decoding the Jamstack: A Primer for E-commerce Entrepreneurs
              </p>
              <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  Headless Commerce Development
                </button>
                <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                  MVP & POC Development
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-[80vh] w-full flex items-center justify-center'>
        <NudgeCard/>
      </div>
    </main>
  );
};

export default Blogs;
