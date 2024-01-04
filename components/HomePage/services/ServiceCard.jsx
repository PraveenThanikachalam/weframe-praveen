import SvgRenderer from '@/lib/svg_renderer';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, img ,url }) => {
  return (
    <Link className='w-72 md:w-[30%] z-20' href={`${url}`}>
    <div
      className={`serviceCard cursor-pointer  hover:shadow-sm hover:shadow-cyan-500 text-gray-300 hover:text-gray-100 bg-gradient-to-br from-[#1FBCCB1F] via-[#020C0D] to-transparent transition-all duration-200 max-w-xs h-32 rounded-xl flex items-center justify-start relative border overflow-hidden border-gray-600`}
    >
      <Image src={'/assets/union.svg'} width={500} height={500} className='absolute left-0 right-0 top-0 bottom-0'/>
      {img && (
        <SvgRenderer
          svgText={img}
          className={'absolute right-0 w-auto h-[80%]'}
        />
      )}

      <div className="w-[70%] h-full bg-[url('/assets/services/unionbackground.svg')] bg-cover relative">
        <h2 className="text-xl font-bold   absolute bottom-6 left-6">
          {title}
        </h2>
      </div>
    </div></Link>
  );
};

export default ServiceCard;
