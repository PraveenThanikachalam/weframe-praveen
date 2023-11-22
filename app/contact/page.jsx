import Button from '@/components/ui/Button';
import Matrix from '@/components/ui/Matrix';
import TagButton from '@/components/ui/TagButton';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <section className=" max-w-screen-xl mx-auto  md:px-4 px-2 lg:px-4">
      <Matrix />
      <div className=" w-full  lg:h-[85vh]  flex lg:flex-row  flex-col">
        <div className="left lg:w-[50%] w-full text-center lg:text-left  flex  flex-col items-center lg:items-left justify-evenly">
          <div className="w-full px-2 py-8 lg:py-0">
            <h1 className="  lg:text-5xl md:text-5xl text-4xl font-title-font gradient-text font-bold">
              Get in Touch with our Experts
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4"
            >
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
          <div className=" w-full flex flex-col gap-4 mt-5 lg:mt-0">
            <p className="text-lg font-semibold text-white glow">Socials</p>
            <div className="flex gap-5 items-center lg:justify-start justify-center">
              <Image
                src={'/assets/socials/social1.svg'}
                width={0}
                height={0}
                className="w-auto h-7"
                alt=""
              />
              <Image
                src={'/assets/socials/social2.svg'}
                width={0}
                height={0}
                className="w-auto h-7"
                alt=""
              />
              <Image
                src={'/assets/socials/social3.svg'}
                width={0}
                height={0}
                className="w-auto h-7"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right lg:p-5 mt-12 lg:mt-0 lg:w-[50%] w-full h-full flex flex-col  lg:items-start items-center justify-evenly">
          <div className="form lg:w-full w-[75%] flex items-center lg:justify-start justify-center">
            <div className="lg:w-full md:w-[90%] w-full ">
              <div className="flex  lg:flex-row md:flex-row flex-col gap-3 lg:gap-0 md:gap-0 flex-wrap -m-2">
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name Surname"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="help@weframetech.com"
                      id="email"
                      name="email"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2  w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter a description"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3  item lg:justify-start mt-6 lg:mt-0 justify-center p-5 lg:p-0  items-center lg:items-start">
            <p className="text-base text-cyan-200">
              Service you want to query for
            </p>
            <div className="flex flex-wrap gap-2 items-center lg:justify-start justify-center">
              <button
                style={{ fontFamily: 'Fira Mono, monospace' }}
                className="px-4 py-2 rounded-2xl   bg-black text-white border border-cyan-300 shadow-cyan-300 shadow-sm md:text-sm text-xs lg:text-sm"
              >
                Jamstack Development
              </button>
              <TagButton name={'CTO as a Service'} />
              <TagButton name={'API Development'} />
              <TagButton name={'Headless Commerce Development'} />
              <TagButton name={'MVP & POC Development'} />
              <TagButton name={'Custom Software Development'} />
              <TagButton name={'Product Design Services'} />
            </div>
          </div>
          <div className="my-8 lg:mt-8  w-full flex items-end justify-center">
            <div className="flex lg:flex-row md:flex-row flex-col   w-full items-center lg:justify-end justify-center lg:gap-2 gap-3 ">
              <Button label={'Book Meeting'} variant="outline" />
              <Button label={'Send Query'} variant="filled" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
