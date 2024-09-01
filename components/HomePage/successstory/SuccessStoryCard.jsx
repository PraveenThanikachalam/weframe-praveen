import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SuccessStoryCard = ({ data }) => {
  return (
    <Link
      href={data.url || '#'}
      className=" w-full relative border border-gray-600 overflow-hidden items-center justify-center rounded-xl flex flex-col p-5"
    >
      <div className="h-full w-full py-2  lg:py-0 flex items-center justify-center">
        <Image
          width={500}
          height={500}
          loading="lazy"
          className=" h-auto lg:w-[90%] lg:h-[90%] object-cover rounded-md w-full"
          src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.image}`}
          alt=""
        />
      </div>
      <div className="w-full flex lg:p-6 p-1 flex-col items-start justify-center">
        <h1 className="lg:text-2xl text-lg font-bold text-white line-clamp-2">
          {data?.heading}
        </h1>

        <p className="text-sm mt-2 text-gray-300 line-clamp-6">
          {data?.description}
        </p>
      </div>
    </Link>
  );
};

export default SuccessStoryCard;
