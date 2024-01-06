'use client';
import SvgRenderer from '@/lib/svg_renderer';
import { useInView } from 'react-intersection-observer';

const MediumBox = ({ title, desc, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`lg:w-[32%] md:w-[30%] w-[320px] transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } h-80 border border-gray-600 hover:shadow-sm hover:shadow-white transition-all duration-200 cursor-default  p-4 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D]`}
    >
      <div className="h-56 flex items-center justify-center">
        <SvgRenderer
          svgText={icon}
          className={'object-contain h-24 animate-pulse'}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-xl font-medium">{title}</h1>
        <p
          style={{ color: 'rgba(153, 153, 153, 1)' }}
          className="font-light text-sm line-clamp-6"
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MediumBox;
