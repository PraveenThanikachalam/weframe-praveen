'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';

const CustomCarousel = ({
  testData,
  children,
  slidesPerView,
  maxWidth,
  spaceBetween,
  centeredSlides,
  initialSlide,
}) => {
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
    <div className="flex flex-col w-full">
      <div className=" w-full mb-8  max-w-screen-xl mx-auto  flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row text-center lg:text-left items-center justify-between">
          <div>
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-bold mb-1.5">
              {testData?.heading}
            </h1>
            <p className="text-gray-300 font-light md:text-xl">
              {testData?.description}
            </p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0 text-white ">
            <div
              onClick={() => swiperRef.current.slidePrev()}
              className="w-12 h-12 hover:shadow-button-glow hover:text-black cursor-pointer rounded-full  flex items-center justify-center border border-white"
            >
              <Image
                alt="img"
                src={'/icons/arrow-left.svg'}
                width={200}
                height={300}
                className="w-4 h-auto"
              />
            </div>
            <div
              onClick={() => swiperRef.current.slideNext()}
              className="w-12 h-12 hover:shadow-button-glow hover:text-black cursor-pointer rounded-full  flex items-center justify-center border border-white"
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
        </div>
      </div>

      <div className="w-full overflow-hidden py-5 flex items-center justify-end">
        <Swiper
          style={{
            width: `${isMobile ? '95%' : '100%'}`,
            overflow: 'visible',
          }}
          className="text-white "
          spaceBetween={spaceBetween || 40}
          slidesPerView={isMobile ? 1 : slidesPerView}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={initialSlide}
          centeredSlides={centeredSlides}
          loop={true}
        >
          {children.map((child, index) => (
            <SwiperSlide
              style={{ maxWidth: maxWidth }}
              className="w-full"
              key={index}
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomCarousel;
