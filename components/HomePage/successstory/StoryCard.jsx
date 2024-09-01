'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import useAssetInfo from '@/hooks/useAssetInfo';
import { cn } from '@/lib/utils';

const StoryCard = ({ data, animate = true }) => {
  const [mediaUrl, setmediaUrl] = useState(
    `${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.file}`
  );

  const { type, error } = useAssetInfo(mediaUrl);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
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
    <div
      ref={ref}
      className={cn(
        'w-full transition-all lg:h-[480px] h-[600px] duration-500 story-card-grd  border  border-gray-600 rounded-xl flex flex-col-reverse lg:flex-row p-5',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        !animate && 'translate-y-0 opacity-100'
      )}
    >
      <div className="lg:w-[40%] w-full flex lg:p-6 p-1 flex-col items-start justify-center">
        <h1 className="lg:text-2xl text-lg font-bold text-white">
          {data?.heading}
        </h1>
        <div className="lg:flex md:flex hidden gap-2 my-3 flex-wrap ">
          {data?.tags?.map((tag, index) => {
            return (
              <button
                key={index}
                className="navbar borderGrd cursor-default text-gray-300 px-4 py-1 text-sm rounded-xl"
              >
                {tag}
              </button>
            );
          })}
        </div>
        <p className="text-sm mt-2 text-gray-300 line-clamp-6">
          {data?.description}
        </p>
        <div className="flex gap-3 mt-5 items-center justify-between w-full">
          {!error && type === 'video' ? (
            <>
              {isPlaying ? (
                <button
                  onClick={handlePause}
                  className={
                    'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-3 transition-all duration-150  font-medium'
                  }
                >
                  {' '}
                  Pause
                </button>
              ) : (
                <button
                  onClick={handlePlay}
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
            <Link className="w-full" href={data?.button_url ?? '/'}>
              <button
                className={
                  'w-full border border-gray-500 text-white hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-3 transition-all duration-150  font-medium'
                }
              >
                {' '}
                {data?.button_text}
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
              className="lg:w-[85%] w-full h-[95%] "
              controls={isPlaying ? true : false}
              preload="none"
              poster={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.thumbnail}`}
            >
              <source
                src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.file}`}
                type="video/ogg"
              />
            </video>
          ) : (
            <Image
              width={500}
              height={500}
              loading="lazy"
              className=" h-auto lg:w-[90%] lg:h-[90%] object-cover rounded-md w-full"
              src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.file}`}
              alt=""
            />
          ))}
      </div>
    </div>
  );
};

export default StoryCard;
