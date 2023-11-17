import React from 'react';
import Image from 'next/image';

const SmallBox = ({ title, img }) => {
  return (
    <div className="w-56 border-gray-600 border rounded-xl story-card-grd flex flex-col items-center justify-center gap-3 p-6">
      <Image
        width={0}
        height={0}
        className="w-auto"
        alt="img"
        src={`${img}`}
      />
      <p className="font-fira-code text-sm text-gray-400">{title}</p>
    </div>
  );
};

export default SmallBox;
