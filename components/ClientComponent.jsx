'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ClientComponent = () => {
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);
  return (
    <>
      <div className="w-full mb-12  flex items-center justify-center">
        <div className="w-[80%] flex flex-col lg:flex-row text-center lg:text-left items-center justify-between">
          <div>
            <h1 className="text-4xl text-white font-bold">Hear from Clients</h1>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0 text-white ">
            <div
              onClick={() => swiperRef.current.slidePrev()}
              className="w-12 h-12 hover:bg-white hover:text-black cursor-pointer rounded-full  flex items-center justify-center border border-white"
            >
              <i className="ri-arrow-left-line  "></i>{' '}
            </div>
            <div
              onClick={() => swiperRef.current.slideNext()}
              className="w-12 h-12 hover:bg-white hover:text-black cursor-pointer rounded-full  flex items-center justify-center border border-white"
            >
              <i className="ri-arrow-right-line "></i>{' '}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  mt-12 flex  items-center justify-end">
        <Swiper
          style={{ width: `${isMobile ? '85vw' : '80vw'}`, height: 'auto' }}
          className="text-white "
          spaceBetween={isMobile ? 50 : 10}
          slidesPerView={isMobile ? 1 : 2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="lg:w-[600px] w-[300px] lg:h-80 h-48   relative flex items-center justify-center rounded-xl">
              <img
                src="/assets/client/client.png"
                className="h-full w-full rounded-xl"
                alt=""
              />
              <div className="w-[90%] absolute bottom-3 flex items-center justify-between">
                <div className="  w-56 flex items-center justify-center">
                  <div>
                    <img src="/assets/client/david.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-white">
                      David Goggins
                    </p>
                    <p className="text-xs text-gray-200">
                      CEO, Fit India Movement
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/assets/client/pause.svg" alt="" />
                </div>
              </div>
              <div>
                <p className="absolute top-6 right-6 text-white text-xs font-bold">
                  View Project <i className="ri-arrow-right-line"></i>{' '}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[600px] w-[300px] lg:h-80 h-48  relative flex items-center justify-center rounded-xl">
              <img
                src="/assets/client/client.png"
                className="h-full w-full rounded-xl"
                alt=""
              />
              <div className="w-full h-full bg-black absolute z-10 rounded-xl opacity-90 flex items-center text-xs lg:text-sm justify-center text-white p-16">
                Working with WeFrameTech on our Ownerpreneur project has been
                nothing short of exceptional. Their innovative design and
                flawless development not only met but exceeded our expectations.
                The result is a cutting-edge platform that beautifully
                encapsulates our vision. Their commitment to excellence and
                dedication to our success made this collaboration truly
                transformative. We highly recommend WeFrameTech to anyone
                looking to turn their entrepreneurial dreams into reality.
              </div>
              <div className="w-[90%] absolute z-20 bottom-3 flex items-center justify-between">
                <div className="  w-56 flex items-center justify-center">
                  <div>
                    <img src="/assets/client/david.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-white">
                      David Goggins
                    </p>
                    <p className="text-xs text-gray-200">
                      CEO, Fit India Movement
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/assets/client/play.svg" alt="" />
                </div>
              </div>
              <div>
                <p className="absolute z-20 top-6 right-6 text-white text-xs font-bold">
                  View Project <i className="ri-arrow-right-line"></i>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[600px] w-[300px] lg:h-80 h-48   relative flex items-center justify-center rounded-xl">
              <div className="w-full h-full bg-black absolute z-10 rounded-xl text-xs lg:text-sm  flex items-center justify-center text-white p-16">
                Working with WeFrameTech on our Ownerpreneur project has been
                nothing short of exceptional. Their innovative design and
                flawless development not only met but exceeded our expectations.
                The result is a cutting-edge platform that beautifully
                encapsulates our vision. Their commitment to excellence and
                dedication to our success made this collaboration truly
                transformative. We highly recommend WeFrameTech to anyone
                looking to turn their entrepreneurial dreams into reality.
              </div>
              <div className="w-[90%] absolute z-20 bottom-3 flex items-center justify-between">
                <div className="  w-56 flex items-center justify-center">
                  <div>
                    <img src="/assets/client/david.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-white">
                      David Goggins
                    </p>
                    <p className="text-xs text-gray-200">
                      CEO, Fit India Movement
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="absolute z-20 top-6 right-6 text-white text-xs font-bold">
                  View Project <i className="ri-arrow-right-line"></i>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ClientComponent;
