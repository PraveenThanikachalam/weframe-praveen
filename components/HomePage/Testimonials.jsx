'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

const Testimonials = ({ testData }) => {
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
    <>
      <div className=" w-full md:w-4/5 max-w-screen-xl my-20  flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row text-center lg:text-left items-center justify-between">
          <div>
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-bold">
              {testData?.testimonial_heading}
            </h1>
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

      <div className="w-full overflow-hidden flex items-center justify-end">
        <Swiper
          style={{
            width: `${isMobile ? '90vw' : '80vw'}`,
            maxWidth: '1280px',
            height: '480px',
            overflow: 'visible',
          }}
          className="text-white "
          spaceBetween={40}
          slidesPerView={isMobile ? 1 : 1.2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testData?.testimonial_cards?.map((item, index) => (
            <SwiperSlide key={index} className="!h-full max-h-[480px]">
              <TestimonialCard
                type={item?.background_type}
                source={item?.background?.key}
                desc={item?.description}
                authorName={item?.user_name}
                authorDesc={item?.user_profession}
                authorPhoto={item?.user_avatar?.key}
                viewBtn={item?.project_button_name}
                viewUrl={item?.project_url}
                thumbnail={item?.thumbnail?.key}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
