import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <main className='relative bottom-0'>
      <div className="footer w-full relative bottom-0 p-12 flex flex-col items-center justify-center text-white ">
        <div className="lg:w-[90%] w-full lg:flex-row flex-col flex items-center lg:justify-between justify-center">
          <div className="lg:w-[40%] w-[95%] text-center lg:text-left">
            <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center">
              <div>
                <Image
                  src={'/assets/logo.svg'}
                  width={0}
                  height={0}
                  className="h-auto w-7"
                  alt=""
                />
              </div>
              <p
                style={{ color: 'rgba(153, 153, 153, 1)' }}
                className="font-light mt-4"
              >
                At WeFrame Tech, we are dedicated to empowering
                Direct-to-Consumer (D2C) brands with cutting-edge headless
                commerce solutions. Our expertise lies in crafting seamless,
                high-performance e-commerce experiences that enhance customer
                engagement and drive growth.
              </p>
              <div className="flex gap-3 mt-5">
                <Image
                  src={'/assets/socials/icons/social-icon-1.svg'}
                  width={0}
                  height={0}
                  className="h-auto w-6"
                  alt=""
                />
                <Image
                  src={'/assets/socials/icons/social-icon-2.svg'}
                  width={0}
                  height={0}
                  className="h-auto w-6"
                  alt=""
                />
                <Image
                  src={'/assets/socials/icons/social-icon-3.svg'}
                  width={0}
                  height={0}
                  className="h-auto w-6"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex lg:gap-3 mt-8 lg:mt-0 gap-10 font-light  text-gray-300">
            <div className="flex flex-col  gap-6">
              <p style={{ color: '#062528' }} className="text-lg font-medium">
                Services
              </p>
              <ul className=" text-white text-sm lg:text-base  flex flex-col gap-3">
                <li>Headless Ecom</li>
                <li>UI/UX Designing</li>
                <li>CTO as a Service</li>
                <li>Jamstack Development</li>
                <li>MVP & POC Development</li>
                <li>Custom Software Development</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <p style={{ color: '#062528' }} className="text-lg font-medium">
                About
              </p>
              <ul className=" text-white flex flex-col gap-3">
                <li>Blogs</li>
                <li>About us</li>
                <li>Case Studies</li>
                <li>Get Instant Quotation</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <p style={{ color: '#062528' }} className="text-lg font-medium">
                Help
              </p>

              <ul className=" text-white flex flex-col gap-3">
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Book a Call</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 w-[90%] lg:mt-10 mt-6"></div>
        <div className="text-gray-500  lg:mt-10 mt-5 flex flex-col lg:flex-row items-center justify-between w-[90%]">
          <p className="lg:text-sm text-xs">&#169; 2023 All rights reserved.</p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
