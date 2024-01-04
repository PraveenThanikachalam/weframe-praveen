'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const TestimonialCard = ({
  type,
  source,
  desc,
  authorName,
  authorDesc,
  authorPhoto,
  viewBtn,
  viewUrl,
  thumbnail
}) => {
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
    <div className="relative h-full bg-cover flex items-center justify-center rounded-xl overflow-hidden">
      {type === 'image' && (
        <>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${source}`}
            alt="bgImage"
            fill
            className={`object-cover -z-[1] ${desc && 'brightness-[10%]'}`}
            loading="lazy"
          />
          <p className="absolute inset-0 w-full px-7 py-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-base lg:text-lg xl:text-xl">
            {desc}
          </p>
        </>
      )}
      {type === 'video' && (
        <video
          ref={videoRef}
          preload='none'
          poster={`${process.env.NEXT_PUBLIC_API_URL}/assets/${thumbnail}`}
          className="w-full h-full object-cover rounded-xl absolute inset-0 -z-[1]"
          loop
        >
          <source
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${source}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="w-full h-full flex flex-col justify-between gap-3 rounded-xl">
        <div className="flex justify-end">
          <Link href={`${viewUrl}`}><p className="text-white text-xs font-bold cursor-pointer px-7 py-5">
            {viewBtn}
          </p></Link>
        </div>
        <div className="w-full h-1/2 bg-gradient-to-t from-black/80 to-black/0 px-7 py-5 items-end flex justify-between">
          <div className="flex gap-2">
            <Image
              width={400}
              height={300}
              className="w-10 h-10 rounded-full object-contain"
              src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${authorPhoto}`}
              loading="lazy"
              alt="authorPhoto"
            />
            <div className="flex flex-col gap-1">
              <p className=" text-white text-sm font-semibold font-title-font">
                {authorName}
              </p>
              <p className="text-[#999] text-xs font-normal">{authorDesc}</p>
            </div>
          </div>
          {type === 'video' && (
            <div>
              {isPlaying ? (
                <button onClick={handlePause}>
                  <Image
                    width={400}
                    height={300}
                    className="w-10"
                    src="/assets/client/pause.svg"
                    loading="lazy"
                    alt="pause"
                  />
                </button>
              ) : (
                <button onClick={handlePlay}>
                  <Image
                    width={400}
                    height={300}
                    className="w-10"
                    src="/assets/client/play.svg"
                    loading="lazy"
                    alt="play"
                  />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
