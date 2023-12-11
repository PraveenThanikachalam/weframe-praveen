import Image from 'next/image';

const SmallBox = ({ title, img }) => {
  return (
    <div className="lg:w-56 md:w-55 w-full border-gray-600 text-gray-400 hover:text-white hover:shadow-sm hover:shadow-white transition-all duration-200 cursor-default border rounded-xl story-card-grd flex flex-col items-center justify-center gap-3 p-6">
      <Image
        width={0}
        height={0}
        className="w-auto animate-pulse"
        alt="img"
        src={`${img}`}
        loading="lazy"
      />
      <p className="font-fira-code text-sm ">{title}</p>
    </div>
  );
};

export default SmallBox;
