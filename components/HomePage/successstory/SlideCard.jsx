'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { convertToSlug } from '@/lib/utils';

const SlideCard = ({ data }) => {
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto items-center justify-center flex">
      <Swiper
        // install Swiper modules
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        style={{
          width: `${isMobile ? '95vw' : '80vw'}`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          //   background:'white'
        }}
      >
        {data?.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" w-full story-card-grd relative border overflow-hidden items-center justify-center  border-gray-600 rounded-xl flex flex-col-reverse lg:flex-row p-5 ">
                <div className="lg:w-[40%] w-full flex lg:p-6 p-1 flex-col items-center justify-center">
                  <h1 className="lg:text-2xl text-lg font-bold text-white">
                    {slide?.case_study_heading}
                  </h1>
                  <div className="lg:flex md:flex hidden gap-2 my-3 flex-wrap">
                    {slide?.tags?.map((tag, index) => {
                      return (
                        <button
                          key={index}
                          className="navbar borderGrd text-gray-300 px-4 py-1 text-sm rounded-xl"
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-sm mt-2 text-gray-300">
                    {slide?.case_study_description}
                  </p>
                  <div className="flex gap-3 mt-5 relative items-center justify-between w-full">
                    <div className={` gap-3 flex z-50 text-white`}>
                      <div
                        onClick={() => swiperRef.current.slidePrev()}
                        className="w-12 h-12 rounded-full border flex items-center transition-all duration-200 hover:shadow-button-glow  hover:text-black cursor-pointer justify-center border-white"
                      >
                        <Image
                          alt="img"
                          loading="lazy"
                          src={'/icons/arrow-left.svg'}
                          width={200}
                          height={300}
                          className="w-4 h-auto"
                        />
                      </div>
                      <div
                        onClick={() => swiperRef.current.slideNext()}
                        className="w-12 h-12 hover:shadow-button-glow transition-all duration-200 hover:text-black rounded-full border flex items-center cursor-pointer justify-center border-white"
                      >
                        <Image
                          alt="img"
                          src={'/icons/arrow-right.svg'}
                          width={200}
                          height={300}
                          className="w-4 h-auto"
                        />
                      </div>
                    </div>
                    <Link
                      href={`/blogs/${convertToSlug(slide.case_study_heading)}`}
                    >
                      <button
                        className="    
                      w-36 bg-white hover:text-white hover:bg-transparent border border-gray-500 rounded-full px-4 py-3 transition-all duration-150  font-medium"
                      >
                        {slide?.case_study_btn_text}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-[60%] w-full py-2  lg:py-0 flex items-center justify-center">
                  <Image
                    width={400}
                    height={300}
                    className=" h-auto lg:w-[85%] w-full rounded-xl"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${slide.image.key}`}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlideCard;
