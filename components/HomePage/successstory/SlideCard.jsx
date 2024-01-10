'use client';
// Import necessary modules
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { useInView } from 'react-intersection-observer';
import useAssetInfo from '@/hooks/useAssetInfo';

const SlideCard = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  const SlideCardInfo = (slide) => {
    const videoRef = useRef(null);
    const { type, error } = useAssetInfo(`${process.env.NEXT_PUBLIC_API_URL}/assets/${slide?.case_studies_id?.file}`);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };

    const handlePause = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    useEffect(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      };
    }, []);

    return {
      videoRef,
      type,
      error,
      isPlaying,
      handlePlay,
      handlePause,
    };
  };


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
    <div
      ref={ref}
      className={`w-full max-w-screen-xl ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } transition-all duration-500 mx-auto items-center justify-center flex`}
    >
      <Swiper
        // install Swiper modules
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        style={{
          width: `${isMobile ? '92vw' : '79vw'}`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {data?.map((slide, index) => {

          const { videoRef, type, error, isPlaying, handlePlay, handlePause } = SlideCardInfo(slide);

          return (
            <SwiperSlide key={index}>
              <div className=" w-full lg:h-[480px]  story-card-grd relative border overflow-hidden items-center justify-center rounded-xl flex flex-col-reverse lg:flex-row p-5 ">
                <div className="lg:w-[40%] w-full flex lg:p-6 p-1 flex-col items-start justify-center">
                  <h1 className="lg:text-2xl text-lg font-bold text-white line-clamp-2">
                    {slide?.case_studies_id?.heading}
                  </h1>
                  <div className="lg:flex md:flex hidden gap-2 my-3 flex-wrap">
                    {slide?.case_studies_id?.tags?.map((tag, index) => {
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

                  <p className="text-sm mt-2 text-gray-300 line-clamp-6">
                    {slide?.case_studies_id?.description}
                  </p>
                  <div className="flex lg:flex-row flex-col gap-3 mt-5 relative items-center justify-between w-full">
                    <div className={` gap-3 flex z-50 text-white`}>
                      <div
                        onClick={() => swiperRef.current.slidePrev()}
                        className="w-12 h-12 rounded-full border flex items-center transition-all duration-200 hover:shadow-button-glow  hover:text-black cursor-pointer justify-center border-white"
                      >
                        <Image
                          alt="img"
                          src={'/icons/arrow-left.svg'}
                          width={0}
                          height={0}
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
                          width={0}
                          height={0}
                          className="w-4 h-auto"
                        />
                      </div>
                    </div>
                    {!error && type === 'video' ? (
                      <>
                        {isPlaying ? (
                          <button
                            onClick={() => {
                              handlePause();
                            }}
                            className={
                              'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-3 transition-all duration-150  font-medium'
                            }
                          >
                            {' '}
                            Pause
                          </button>
                        ) : (
                          <button
                            onClick={() => handlePlay()}
                            className={
                              'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-3 transition-all duration-150  font-medium'
                            }
                          >
                            {' '}
                            Play
                          </button>
                        )}
                      </>
                    ) : (
                      <Link
                        className="w-full"
                        href={`${slide?.case_studies_id?.button_url}`}
                      >
                        <button
                          className={
                            'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-3 transition-all duration-150  font-medium'
                          }
                        >
                          {' '}
                          {slide?.case_studies_id?.button_text}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="lg:w-[60%] h-full w-full py-2  lg:py-0 flex items-center justify-center">
                  {!error &&
                    (type === 'video' ? (
                      <video
                        ref={videoRef}
                        width="0"
                        height="0"
                        className="lg:w-[90%] w-full h-[90%] "
                        controls={isPlaying ? true : false}
                        preload="none"
                        poster={`${process.env.NEXT_PUBLIC_API_URL}/assets/${slide?.case_studies_id?.thumbnail}`}
                      >
                        <source
                          src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${slide?.case_studies_id?.file}`}
                          type="video/ogg"
                        />
                      </video>
                    ) : (
                      <Image
                        width={500}
                        height={500}
                        loading="lazy"
                        className=" h-auto lg:w-[90%] lg:h-[90%] object-cover rounded-md w-full"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${slide?.case_studies_id?.file}`}
                        alt=""
                      />
                    ))}
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
