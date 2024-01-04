'use client';
import SvgRenderer from '@/lib/svg_renderer';
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
            {framework?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:h-24 h-20 md:my-3 2xl:my-7 md:mx-6 2xl:mx-12  items-center grayscale hover:grayscale-0 justify-between transition-all duration-300"
                >

                  <SvgRenderer
                    svgText={item.logo}
                    color="#1FBCCB"
                    className="lg:h-20 md:h-16 h-10 lg:w-12 md:w-12  w-10"
                  />
                  <p className="text-sm text-[#1FBCCB]">{item.name}</p>
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
