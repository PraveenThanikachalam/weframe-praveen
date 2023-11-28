import Image from 'next/image';
import React from 'react';

const ImageGrid = () => {
  return (
    <div className="w-full h-full max-w-md aspect-square my-12 bg-gradient-to-r from-[#122528] to-[#020C0D] rounded-full p-8 rounded-tr-none border-2 ">
      <div className="grid grid-cols-2 gap-4 overflow-hidden w-full h-full rounded-full rounded-tr-none">
        <div className="h-full w-full"></div>
        <div className="h-full w-full relative">
          <Image src="/assets/image-grid/grid-1.jpg" alt="image1" fill />
        </div>
        <div className="h-full w-full relative">
          <Image src="/assets/image-grid/grid-2.jpg" alt="image2" fill />
        </div>
        <div className="h-full w-full relative">
          <Image src="/assets/image-grid/grid-3.jpg" alt="image3" fill />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
