'use client';
import Button from '@/components/ui/Button';
import TagButton from '@/components/ui/TagButton';
import Image from 'next/image';
import { useState } from 'react';

const tags = [
  {
    label: 'All Case Studies',
    url: '/',
    selected: true,
  },
  {
    label: 'Headless Commerce Development',
    url: '/',
  },
  {
    label: 'MVP & POC Development',
    url: '/',
  },
  {
    label: 'Custom Software Development',
    url: '/',
  },
  {
    label: 'Product Design Services',
    url: '/',
  },
  {
    label: 'CTO as a Service',
    url: '/',
  },
  {
    label: 'API Development',
    url: '/',
  },
];

const Contact = () => {
  const [show, setShow] = useState(false);

  const sendQuery = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <section className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center  md:px-4 px-2 lg:px-4">
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
                loading="lazy"
              />
              <Image
                src={'/assets/socials/social2.svg'}
                width={0}
                height={0}
                className="w-auto h-7"
                alt=""
                loading="lazy"
              />
              <Image
                src={'/assets/socials/social3.svg'}
                width={0}
                height={0}
                className="w-auto h-7"
                alt=""
                loading="lazy"
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
              {tags.map((tag, index) => {
                return <TagButton key={index} tag={tag} />;
              })}
            </div>
          </div>
          <div className="my-8 lg:mt-8  w-full flex items-end justify-center">
            <div className="flex lg:flex-row md:flex-row flex-col   w-full items-center lg:justify-end justify-center lg:gap-2 gap-3 ">
              <Button label={'Book Meeting'} variant="outline" />
              <Button
                onClick={sendQuery}
                label={'Send Query'}
                variant="filled"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:w-[40vw] w-[95%] shadow-sm shadow-cyan-200 fixed bottom-5 z-50 ${
          show ? '' : 'opacity-0'
        } my-8 p-5 transition-all duration-300 rounded-xl flex items-center justify-center gap-3 bg-gradient-to-b from-[#0e292c] to-[#020C0D] border-2 border-cyan-400`}
      >
        <div className="p-2">
          <Image
            alt="img"
            src={'/assets/contact/sent.svg'}
            width={300}
            height={200}
            className="h-10 w-auto"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-cyan-400 font-semibold text-sm">Message Sent</p>
          <p className="text-sm font-light text-white">
            Your message has been sent to the team. They will get back to you
            soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
