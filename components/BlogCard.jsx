import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const BlogCard = ({ title, image, link, tags }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <Link
      ref={ref}
      href={`${link}`}
      className={`flex items-center ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } transition-all duration-500  justify-center `}
    >
      <div className="blog md:h-[520px] mt-6 border navbar hover:shadow-sm hover:shadow-white transition-all duration-200 border-gray-500 rounded-xl overflow-hidden w-full md:w-[550px] ">
        <div className="h-72">
          <Image
            width={300}
            quality={100}
            height={300}
            loading="lazy"
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${image}`}
            alt="img"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center p-5 lg:p-5 ">
          <div className="w-full">
            <p className="lg:text-xl text-lg md:text-xl font-semibold text-white font-title-font line-clamp-3">
              {title}
            </p>
            <div className="w-full mt-4 flex flex-wrap items-center justify-start gap-2">
              {tags?.map((tag, index) => {
                return (
                  <button
                    key={index}
                    className="lg:px-4 px-3 py-2 rounded-2xl borderGrd blogBtn text-gray-500 md:text-sm text-xs  lg:text-sm"
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
