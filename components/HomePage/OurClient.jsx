'use client';
import Image from 'next/image';
import data from '@/data/clients';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OurClient = () => {

  return (
    <div className=" clients my-16 max-w-screen-2xl w-full flex flex-col gap-14 items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Our Clients</h1>
      <div className="w-[80vw] flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-4 lg:gap-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={ 1}
            pagination={{ clickable: true }}
            style={{ width: '80vw', padding:'0px 0px 70px 0px', minHeight:'50vh' }}
          >
            {Object.keys(data).map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '50px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {data[item].map((client) => {
                    return (
                      <div
                        key={client.id}
                        className=" lg:h-28 h-24 flex flex-col gap-2 justify-between items-center"
                      >
                        <Image
                          src={client.image}
                          className="h-auto w-10 md:w-14 lg:w-14 items-center flex-grow"
                          width={0}
                          height={0}
                          alt="img"
                        />
                        <p className="text-[#999999] lg:text-sm md:text-sm text-xs">{client.name}</p>
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
