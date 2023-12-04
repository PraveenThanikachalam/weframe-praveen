'use client';
import React, { useState } from 'react';

const SwitchButton = ({ label1, label2 }) => {
  const [shift, setShift] = useState(false);
  return (
    <div className="rounded-2xl  h-14 mt-4 border-gray-500 overflow-hidden flex relative items-center justify-center">
      <div
        className={`w-[50%] h-full absolute right-0 slide z-10 bg-white ${
          shift ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200`}
      ></div>
      <div
        onClick={() => {
          setShift(!shift);
        }}
        className={`flex items-center z-20 justify-center font-semibold cursor-pointer shadow transition-all duration-500  lg:text-md text-sm lg:h-full h-14 px-10 py-2 rounded-l-xl ${
          shift ? 'text-white' : 'text-black'
        } `}
      >
        {label1}
      </div>
      <div
        onClick={() => {
          setShift(!shift);
        }}
        className={`flex items-center z-20 justify-center font-semibold transition-all duration-500 cursor-pointer lg:text-md text-sm px-10 py-2 lg:h-full h-14 rounded-r-xl ${
          shift ? 'text-black' : 'text-white'
        } `}
      >
        {label2}
      </div>
    </div>
  );
};

export default SwitchButton;
