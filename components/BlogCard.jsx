import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, image, link }) => {
  return (
    <Link href={link} className="flex items-center  justify-center ">
      <div className="blog mt-6 border  border-gray-500 rounded-xl overflow-hidden w-[80%] min-h-[35vw] lg:w-[40vw] ">
        <div className="">
          <img src={image} className=" w-full" />
        </div>
        <div className="w-full flex flex-col items-center justify-center p-6 ">
          <div className="w-full">
            <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
              {title}
            </p>
            <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
              <button className="lg:px-4 px-3 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs  lg:text-sm">
                Headless Commerce Development
              </button>
              <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                Product Design Services
              </button>
              <button className="px-4 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs lg:text-sm">
                MVP & POC Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
