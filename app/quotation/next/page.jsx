import React from 'react';
import Button from '@/components/ui/Button';
import SwitchButton from '@/components/ui/SwitchButton';
import Link from 'next/link';
import Image from 'next/image';

const QuoteNext = () => {
  return (
    <main>
      <div>
        <Image
          width={0}
          height={0}
          src="/assets/matrix.svg"
          className="absolute -z-20 top-0 w-full"
          alt=""
        />
      </div>

      <div className="w-full my-16 flex flex-col items-center gap-10 lg:gap-8 justify-center">
        <div className="flex flex-col items-center justify-center text-center lg:w-[50%] w-[80%] gap-5">
          <h1 className="lg:text-5xl md:text-5xl text-3xl text-cyan-200 font-bold font-title-font">
            Get a Quote for Your Development Project
          </h1>
          <SwitchButton
            label1={'Headless E-Commerce'}
            label2={'Jamstack Web Dev'}
          />
        </div>

        <div className="lg:w-[50%] w-[75%] mt-6">
          <div className="form w-full flex items-center lg:justify-center justify-center">
            <div className="lg:w-full md:w-[90%] w-full ">
              <div className="flex  lg:flex-row md:flex-row flex-col gap-3 lg:gap-0 md:gap-0 flex-wrap -m-2">
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="WeFrameTech"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="help@weframetech.com"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+91 42069 42069"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Company Website
                    </label>
                    <input
                      type="text"
                      placeholder="weframetech.com"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Company Size
                    </label>

                    <select className="w-full   font-light rounded-lg border border-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-black h-10 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option value="Yes">Less than 50</option>
                      <option value="No">More than 50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link href={'/quotation/result'}>
            <Button variant="filled" label={'Calculate Quote'} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default QuoteNext;
