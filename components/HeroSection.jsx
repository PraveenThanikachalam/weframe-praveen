import React from 'react';
import Button from './ui/Button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="lg:w-[60%] w-[85%] z-30  flex flex-col items-center justify-center">
      <h1 className="lg:text-6xl text-5xl font-semibold font-title-font">
        Jamstack & Headless <br /> Commerce Agency
      </h1>
      <div className="lg:w-[50%] w-[85%]">
        <p className="text-base font-light my-7 text-gray-300">
          We recognize the demand for high-speed, secure, and easily scalable
          websites. Leveraging the power of Jamstack, we deliver an exceptional
          web development experience tailored to your specific requirements, Get
          an instant quote for your project.
        </p>
      </div>
      <div className="gap-5 flex flex-col lg:flex-row">
        <Link href={'/quotation'}>
          <Button variant="filled" label="Instant Quotation" />
        </Link>
        <Button variant="outline" label="Book a Meeting" />
      </div>
    </div>
  );
};

export default HeroSection;
