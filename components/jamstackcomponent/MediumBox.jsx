import Image from 'next/image';

const MediumBox = ({ title, desc, img }) => {
  return (
    <div className="lg:w-[32%] md:w-[30%] w-[320px] border border-gray-600 hover:shadow-sm hover:shadow-white transition-all duration-200 cursor-default  p-4 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#1FBCCB1F] to-[#020C0D]">
      <div className="p-6">
        <Image
          src={`${img}`}
          width={0}
          height={0}
          alt="img"
          className="h-16 animate-pulse  w-auto"
          loading="lazy"
        />
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
