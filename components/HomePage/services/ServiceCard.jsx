import Image from 'next/image';

const ServiceCard = ({ title, img }) => {
  return (
    <div className="serviceCard borderGrd w-72 md:w-[30%] max-w-xs h-32 rounded-xl flex items-center justify-start relative border overflow-hidden border-gray-600">
      {img && (
        <Image
          src={`/assets/services/${img}`}
          className="absolute right-0 h-auto w-16"
          width={0}
          height={0}
          alt="img"
        ></Image>
      )}

      <div className="w-[70%] h-full bg-[url('/assets/services/union.svg')] bg-cover relative">
        <h2 className="text-xl font-bold text-gray-300 absolute bottom-6 left-6">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ServiceCard;
