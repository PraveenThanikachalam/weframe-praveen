import React from 'react';
import Image from 'next/image';

const OurClient = () => {
  return (
    <div className=" clients mt-48 w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Our Clients</h1>
      <div className="lg:w-[70%] w-[80%] mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div className="w-full flex items-center justify-between">
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl1.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl2.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl3.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl4.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl5.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl6.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl7.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl8.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl9.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl10.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl11.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
          <div>
            {' '}
            <Image
              src={'/assets/client-company/cl12.svg'}
              className="h-auto w-8 lg:w-12"
              width={0}
              height={0}
              alt="img"
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
