'use client';
import SvgRenderer from '@/lib/svg_renderer';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, img, url }) => {
  return (
    <Link
      className={`w-full h-[200px] transition-all duration-500 z-20 `}
      href={`${url}`}
    >
      <div
        className={`serviceCard w-full h-full cursor-pointer  hover:shadow-sm hover:shadow-cyan-500  bg-gradient-to-br from-[#1FBCCB1F] via-[#020C0D] to-transparent transition-all duration-200  rounded-xl flex items-center justify-start relative border overflow-hidden border-gray-600`}
      >
        <Image
          alt="img"
          src={'/assets/union.svg'}
          width={500}
          height={500}
          className="absolute left-0 right-0 top-0 bottom-0"
        />
        {img && (
          <SvgRenderer
            svgText={img}
            className={'absolute right-0 animate-pulse w-auto h-[80%]'}
          />
        )}

        <div className="w-[65%] h-full bg-cover relative">
          <h2 className="text-[27px] font-bold  bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#999999] absolute bottom-6 left-6">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
