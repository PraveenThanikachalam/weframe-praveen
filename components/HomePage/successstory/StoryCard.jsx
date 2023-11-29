'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StoryCard = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
  return (
    <div className="lg:w-[80vw] w-full max-w-screen-xl story-card-grd  border  border-gray-600 rounded-xl flex flex-col-reverse lg:flex-row p-5 ">
      <div className="lg:w-[40%] w-full flex lg:p-6 p-1 flex-col items-center justify-center">
        <h1 className="lg:text-2xl text-lg font-bold text-white">
          {data.title}
        </h1>
        <div className="lg:flex md:flex hidden gap-2 my-3 flex-wrap">
          {data.tags.map((tag, index) => {
            return (
              <Link key={index} href={tag.url}>
                <button
                  className="navbar borderGrd text-white px-4 py-2 rounded-xl"
                >
                  {tag.label}
                </button>
              </Link>
            );
          })}
        </div>
        <p className="text-sm mt-2 text-gray-300">{data.desc}</p>
        <div className="flex gap-3 mt-5 items-center justify-between w-full">
          <div
            className={` gap-3 ${data.slide ? 'flex' : 'hidden'} text-white`}
          >
            <div className="w-12 h-12 rounded-full border flex items-center justify-center border-white">
              <i className="ri-arrow-left-line"></i>
            </div>
            <div className="w-12 h-12 rounded-full border flex items-center justify-center border-white">
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>

          {data.video ? (
            <>
              {isPlaying ? (
                <button
                  onClick={handlePause}
                  className={` ${
                    data.slide
                      ? 'w-36 bg-white hover:text-white hover:bg-transparent border border-gray-500'
                      : 'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent '
                  } rounded-full px-4 py-3 transition-all duration-150  font-medium`}
                >
                  {' '}
                  Pause
                </button>
              ) : (
                <button
                  onClick={handlePlay}
                  className={` ${
                    data.slide
                      ? 'w-36 bg-white hover:text-white hover:bg-transparent border border-gray-500'
                      : 'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent '
                  } rounded-full px-4 py-3 transition-all duration-150  font-medium`}
                >
                  {' '}
                  Play
                </button>
              )}
            </>
          ) : (
            <button
              className={` ${
                data.slide
                  ? 'w-36 bg-white hover:text-white hover:bg-transparent border border-gray-500'
                  : 'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent '
              } rounded-full px-4 py-3 transition-all duration-150  font-medium`}
            >
              {' '}
              Read
            </button>
          )}
        </div>
      </div>
      <div className="lg:w-[60%] w-full py-2  lg:py-0 flex items-center justify-center">
        {data.video ? (
          <video
            ref={videoRef}
            width="0"
            height="0"
            className="lg:w-[85%] w-full h-[95%] "
            playsInline
          >
            <source src="/assets/demo.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            width={400}
            height={300}
            className=" h-auto lg:w-[85%] w-full"
            src="/assets/img1.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default StoryCard;
