'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player';

const TestimonialCard = ({
  source,
  desc,
  authorName,
  authorDesc,
  authorPhoto,
  viewBtn,
  viewUrl,
  thumbnail,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  // const [once, setOnce] = useState(false)

  const getYouTubeVideoId = (url) => {
    const videoIdRegex =
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/videos\?=(?:.*&)?v=)|\/youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url?.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const handlePlayPause = () => {
    setIsStarted(true);
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handlePlayerStateChange = (state) => {
    setIsPlaying(state === 'playing');
  };

  useEffect(() => {
    // Run only on the client side
    const videoId = getYouTubeVideoId(source);
    if (videoId) {
      ReactPlayer.canEnablePIP = false;
    }
  }, [source]);

  return (
    <div className="relative border border-[#1b9ca81f] h-full bg-cover flex items-center justify-center rounded-xl overflow-hidden">
      {!source ? (
        <>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${thumbnail}`}
            alt="bgImage"
            fill
            className={` ${
              desc ? 'object-cover' : 'object-contain'
            } h-full w-full  ${desc && 'brightness-[90%]'}`}
            loading="lazy"
          />
          <p className="absolute inset-0 w-full px-7 py-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-44 md:-translate-y-1/2 text-sm md:text-base lg:text-lg xl:text-xl">
            {desc}
          </p>
        </>
      ) : (
        <>
          <div
            onClick={() => {
              setIsStarted(true);
              setIsPlaying(true);
            }}
            className={`w-full h-full top-0  bg-opacity-0 ${
              isStarted ? 'hidden' : 'cursor-pointer'
            } z-50 absolute bg-white`}
          ></div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${getYouTubeVideoId(
              source
            )}&vq=hd720&modestbranding=1&showinfo=0&fs=0&controls=0&iv_load_policy=3&nologo=1`}
            light={
              isStarted
                ? false
                : `${process.env.NEXT_PUBLIC_API_URL}/assets/${thumbnail}`
            }
            className={` object-cover myPlayer ${
              isStarted ? '-z-[1]' : 'z-20'
            } absolute inset-0  `}
            playing={isPlaying}
            width="100%"
            height="100%"
            onPlay={() => handlePlayerStateChange('playing')}
            onPause={() => handlePlayerStateChange('paused')}
            onEnded={() => handlePlayerStateChange('ended')}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 0,
                  showinfo: 0,
                  controls: 0,
                  fs: 1,
                  iv_load_policy: 3,
                  rel: 0,
                  start: 0,
                  enablejsapi: 1,
                  vq: 'hd1080',
                },
              },
            }}
          />
        </>
      )}
      <div className="w-full h-full  flex flex-col justify-between gap-3 rounded-xl">
        <div className="flex justify-end  p-6">
          <Link className="z-50" href={`${viewUrl}`}>
            <p className="text-white  hover:text-cyan-500  flex items-center justify-center gap-1 glow underline text-xs font-bold cursor-pointer ">
              {viewBtn}{' '}
              <Image
                src={'/icons/arrow-right.svg'}
                alt="img"
                width={200}
                height={300}
                className="w-2 h-auto"
              />
            </p>
          </Link>
        </div>
        <div className="w-full h-1/2 bg-gradient-to-t from-black/80 to-black/0 px-7 py-5  items-end flex justify-between">
          <div className="flex z-50 gap-2">
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

          {thumbnail && source && (
            <div className={` z-50 ${isStarted ? 'block' : 'hidden'}`}>
              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <Image
                    width={400}
                    height={300}
                    className="w-10"
                    src="/assets/client/pause.svg"
                    loading="lazy"
                    alt="pause"
                  />
                ) : (
                  <Image
                    width={400}
                    height={300}
                    className="w-10"
                    src="/assets/client/play.svg"
                    loading="lazy"
                    alt="play"
                  />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
