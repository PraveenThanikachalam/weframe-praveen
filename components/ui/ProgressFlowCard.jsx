'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressFlowCard = ({ title, desc, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      key={index}
      className={`mb-5 flex  ${
        inView ? 'translate-y-0 opacity-100' : ' translate-y-32 opacity-0'
      } transition-all duration-500  justify-between  items-center w-full ${
        index % 2 === 0
          ? 'md:right-timeline md:flex-row-reverse '
          : 'md:left-timeline'
      }`}
    >
      <div className="order-1 md:block hidden w-5/12"></div>
      <div className="z-20 md:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">
          {index + 1}
        </h1>
      </div>
      <div
        className={`order-1 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4 ${
          index % 2 === 0
            ? 'bg-[#1FBCCB1F] text-white'
            : 'bg-[#ffffff1f] text-white'
        }`}
      >
        <h3 className="mb-3 font-bold text-2xl text-cyan-400 font-title-font">
          {title}
        </h3>
        <p className="text-sm leading-snug tracking-wide text-opacity-100">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProgressFlowCard;
