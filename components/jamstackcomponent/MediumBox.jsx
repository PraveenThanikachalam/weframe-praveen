import Image from 'next/image';

const MediumBox = ({ title, desc, icon }) => {
  return (
    <div className="lg:w-[32%] md:w-[30%] w-[320px] h-80 border border-gray-600 hover:shadow-sm hover:shadow-white transition-all duration-200 cursor-default  p-4 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D]">
      <div className="h-56 flex items-center justify-center">
      <div className='animate-pulse z-50 ' dangerouslySetInnerHTML={{__html:icon}}></div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-xl font-medium">{title}</h1>
        <p
          style={{ color: 'rgba(153, 153, 153, 1)' }}
          className="font-light text-sm"
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MediumBox;
