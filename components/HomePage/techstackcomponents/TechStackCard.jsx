'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const TechStackCard = ({ framework, title }) => {
  const { ref, inView } = useInView({
    rootMargin: '-50% 0px',
  });

  return (
    <div
      ref={ref}
      className={`w-full ${
        inView ? 'tech-stack ' : ''
      }  transition-all duration-200  bg-gradient-to-br from-[#1FBCCB1F] via-[#020C0D] to-transparent  rounded-xl p-6 md:p-12 border relative border-gray-500 flex flex-col gap-10 overflow-hidden justify-start`}
    >
      <div className="w-full text-white font-medium glow  text-lg md:text-xl">
        <h2>{title}</h2>
      </div>
      <div className="flex w-full  flex-col items-center justify-center">
        <div className="flex w-full flex-wrap items-center gap-20 justify-center ">
          <div className="flex flex-wrap items-center justify-center lg:w-[90%] w-full gap-5 ">
            {framework?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col lg:h-24 hover:animate-pulse h-20 md:my-3 2xl:my-7 md:mx-6 2xl:mx-12  items-center justify-between grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    width={0}
                    height={0}
                    loading="lazy"
                    className="lg:h-20 md:h-16 h-10 lg:w-12 md:w-12 w-10"
                    src={item.image}
                    alt={item.tech}
                  />
                  <p className="text-sm text-[#1FBCCB]">{item.tech}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
