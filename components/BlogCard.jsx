import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ title, image, link,tags }) => {
  return (
    <Link href={`${link}`} className="flex items-center  justify-center ">
      <div className="blog mt-6 border navbar hover:shadow-sm hover:shadow-white transition-all duration-200 border-gray-500 rounded-xl overflow-hidden w-full md:w-[550px]  min-h-[31vw] lg:w-[500px] ">
        <div className="">
          <Image
            width={300}
            quality={100}
            height={300}
            loading="lazy"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${image}`}
            alt="img"
            className=" h-auto w-full"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center p-3 lg:p-5 ">
          <div className="w-full">
            <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font">
              {title}
            </p>
            <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
              {tags?.map((tag,index)=>{
                return  <button key={index} className="lg:px-4 px-3 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs  lg:text-sm">
                {tag}
              </button>
              })}
             
             
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
