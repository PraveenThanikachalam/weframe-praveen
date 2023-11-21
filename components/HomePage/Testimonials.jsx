'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const Testimonials = () => {
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const TestimonialData = [{
    id: 1,
    type: 'video',
    source: '/assets/demo.mp4',
    desc: '',
    authorName: 'David Goggins',
    authorDesc: 'CEO, Fit India Movement',
    authorPhoto: '/assets/client/david.png'
  },{
    id: 2,
    type: 'text',
    source: '/assets/client/client.png',
    desc: 'Working with WeFrameTech on our Ownerpreneur project has been nothing short of exceptional. Their innovative design and flawless development not only met but exceeded our expectations. The result is a cutting-edge platform that beautifully encapsulates our vision. Their commitment to excellence and dedication to our success made this collaboration truly transformative. We highly recommend WeFrameTech to anyone looking to turn their entrepreneurial dreams into reality.',
    authorName: 'David Goggins',
    authorDesc: 'CEO, Fit India Movement',
    authorPhoto: '/assets/client/david.png'
  },{
    id: 3,
    type: 'video',
    source: '/assets/YT1.mp4',
    desc: '',
    authorName: 'David Goggins',
    authorDesc: 'CEO, Fit India Movement',
    authorPhoto: '/assets/client/david.png'
  }];

  return (
    <>
      <div className=" w-full md:w-4/5 max-w-screen-xl my-12  flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row text-center lg:text-left items-center justify-between">
          <div>
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-bold">
              Hear from Clients
            </h1>
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

      <div className="w-full md:w-4/5 max-w-screen-xl flex  items-center justify-end">
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
            <div className="bg-[url('/assets/client/client.png')] h-[270px] bg-cover flex items-center justify-center rounded-xl">
              <div className="w-full h-full flex flex-col bg-black bg-opacity-70 justify-around lg:justify-between px-7 py-4 gap-3 rounded-xl">
                <div className='flex justify-end cursor-pointer'>
                  <p className="text-white text-xs font-bold">
                    View Project <i className="ri-arrow-right-line"></i>{' '}
                  </p>
                </div>
                <p className='text-sm font-normal text-white max-h-36 text-ellipsis overflow-hidden line-clamp-[7]'>
                  Working with WeFrameTech on our Ownerpreneur project has been
                  nothing short of exceptional. Their innovative design and
                  flawless development not only met but exceeded our
                  expectations. The result is a cutting-edge platform that
                  beautifully encapsulates our vision. Their commitment to
                  excellence and dedication to our success made this
                  collaboration truly transformative. We highly recommend
                  WeFrameTech to anyone looking to turn their entrepreneurial
                  dreams into reality.
                </p>
                <div className='w-full flex justify-between'>
                  <div className='flex gap-2'>
                    <Image
                      width={400}
                      height={300}
                      className="w-10"
                      src="/assets/client/david.png"
                      alt=""
                    />
                    <div className='flex flex-col gap-1'>
                      <p className=' text-white text-sm font-semibold font-title-font'>David Goggings</p>
                      <p className='text-[#999] text-xs font-normal'>CEO, Fitness India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  relative flex items-center justify-center rounded-xl">
              {/* <Image
                width={400}
                height={300}
                src="/assets/client/client.png"
                className="h-full w-full rounded-xl"
                alt=""
              /> */}
              <div className="w-full h-full">
                <video ref={videoRef} className='w-full h-full object-cover rounded-xl' loop>
                  <source src="/assets/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button onClick={handlePlay}>
                  <Image
                    width={400}
                    height={300}
                    className="w-10"
                    src="/assets/client/play.svg"
                    alt=""
                  />
                </button>
                <button onClick={handlePause}>
                  <Image
                    width={400}
                    height={300}
                    className="w-10"
                    src="/assets/client/pause.svg"
                    alt=""
                  />
                </button>
              </div>
              {/* <div className="lg:w-[90%] w-[90%]  absolute z-20 bottom-3 flex items-center justify-start">
                <div className="  w-56 flex items-center justify-start lg:justify-center">
                  <div>
                    <Image
                      width={400}
                      height={300}
                      className="w-10"
                      src="/assets/client/david.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-white">
                      David Goggins
                    </p>
                    <p className="text-xs hidden lg:block text-gray-200">
                      CEO, Fit India Movement
                    </p>
                  </div>
                </div>
              </div> */}
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

export default Testimonials;
