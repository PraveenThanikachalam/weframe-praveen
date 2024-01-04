import SvgRenderer from '@/lib/svg_renderer';
import Link from 'next/link';

const ServiceCard = ({ title, img, url }) => {
  return (
    <Link
      href={url || '/'}
      className={`serviceCard cursor-pointer w-72 md:w-[30%] hover:shadow-sm hover:shadow-cyan-500 text-gray-300 hover:text-gray-100 transition-all duration-200 max-w-xs h-32 rounded-xl flex items-center justify-start relative border overflow-hidden border-gray-600`}
    >
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
    </Link>
  );
};

export default ServiceCard;
