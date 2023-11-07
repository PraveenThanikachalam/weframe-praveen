import React from 'react';

const Footer = () => {
  return (
    <main>
      <div className="w-full mt-16 footer h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <div
          style={{ background: '#041719' }}
          className="w-[80%]  lg:p-16 p-10 rounded-xl border-2 text-center border-cyan-800 flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl text-cyan-300 font-bold">
            This text can be <br /> changed on purpose
          </h1>
          <button className="px-8 mt-8 py-2 rounded-full font-medium text-sm bg-white ">
            Also This CTA
          </button>
        </div>
      </div>
      <div className="footer w-full h-96 p-10 flex flex-col items-center justify-center text-white ">
        <div className="w-[90%] flex items-center lg:justify-end justify-center">
          <div className="flex lg:gap-8 gap-10 font-light  text-gray-300">
            <ul className="flex flex-col gap-8">
              <li>Jamstack</li>
              <li>Headless Commerce</li>
              <li>Get Instant Quotation</li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li>Services</li>
              <li>Case Studies</li>
              <li>Blogs</li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li>Careers</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 w-[90%] lg:mt-10 mt-6"></div>
        <div className="text-gray-500  lg:mt-10 mt-5 flex flex-col lg:flex-row items-center justify-between w-[90%]">
          <p className="lg:text-sm text-xs">
            2023 WeFrame Tech, All rights reserved.
          </p>
          <ul className="flex mt-2 lg:mt-0 gap-5">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Footer;
