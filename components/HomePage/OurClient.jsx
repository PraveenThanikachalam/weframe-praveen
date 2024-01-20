'use client';
import Image from 'next/image';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const OurClient = ({ clientsData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //function to divide the clients array into subArrays
  function createSlidesArr(clients) {
    const slidesArr = [];
    const maxItemsPerSlide = 12;

    const numSlides = Math.ceil(clients.length / maxItemsPerSlide);

    const targetItemsPerSlide = Math.ceil(clients.length / numSlides);

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * targetItemsPerSlide;
      const endIndex = startIndex + targetItemsPerSlide;
      const slide = clients.slice(startIndex, endIndex);
      slidesArr.push(slide);
    }

    if (slidesArr.length === 1) {
      slidesArr.push(slidesArr[0]);
    }

    return slidesArr;
  }

  const slidesArr = createSlidesArr([...clientsData.clients]);

  return (
    <div className=" clients mt-28 max-w-screen-2xl w-full flex flex-col gap-14 items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        {clientsData?.client_section_heading}
      </h1>
      <div className="w-[80vw] flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center cursor-grab justify-center gap-4 lg:gap-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={isMobile ? false : true}
            pagination={{ clickable: true }}
            style={{
              width: '80vw',
              padding: '0px 0px 70px 0px',
              minHeight: '50vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {slidesArr?.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: `${isMobile ? '30px 50px' : '50px 100px'}`,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item?.map((client) => {
                    return (
                      <div
                        key={client?.client_logo?.key}
                        className=" lg:h-28 h-24 flex flex-wrap flex-col gap-2 justify-end items-center"
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${client?.client_logo?.key}`}
                          className="md:h-20 h-16 w-24 object-contain  items-center "
                          width={500}
                          height={500}
                          alt="img"
                          loading="lazy"
                        />
                        <p className="text-[#999999] lg:text-sm md:text-sm text-xs">
                          {client?.client_name}
                        </p>
                      </div>
                    );
                  })}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
