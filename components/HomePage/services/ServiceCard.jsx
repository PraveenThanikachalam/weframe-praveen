'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

const ServiceCard = ({ title, img }) => {
  return (
    <div className="serviceCard  borderGrd w-96 h-48 rounded-xl flex items-center justify-start relative border overflow-hidden border-gray-600">
      <Image
        src={'/assets/services/union.svg'}
        className="absolute w-full h-full z-20"
        width={0}
        height={0}
        alt="img"
      />
      {img && (
        <Image
          src={`/assets/services/${img}`}
          className="absolute right-0 h-auto w-16"
          width={0}
          height={0}
          alt="img"
        ></Image>
      )}

      <div className="w-[70%] h-full  relative">
        <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ServiceCard;
