'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const CultureComponent = ({ title, arr }) => {
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
      <div className=" w-full mx-auto max-w-screen-xl mb-12 z-50 flex items-center justify-center">
        <div className="w-full  flex flex-col lg:flex-row text-center lg:text-left items-center justify-between">
          <div>
            <h1 className="lg:text-4xl text-3xl md:text-4xl text-white font-bold">
              {title}
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
          slidesPerView={isMobile ? 1 : 1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {arr.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="!h-full max-h-[400px] lg:max-h-[500px]"
              >
                <div className="w-full rounded-xl overflow-hidden h-full">
                  <Image
                    alt="img"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${item?.directus_files_id}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default CultureComponent;
