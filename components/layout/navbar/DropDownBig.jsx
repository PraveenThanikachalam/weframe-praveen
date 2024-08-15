import Link from 'next/link';
import Image from 'next/image';

const DropDownBig = ({ visible, setVisible, navlist }) => {
  return (
    <div
      className={`absolute laptop w-full  z-50 bg-[#020C0D] px-10 gap-5 ${
        visible ? 'max-h-screen overflow-visible py-5' : 'max-h-0 overflow-hidden'
      } grid grid-cols-2 transition-all duration-300 ease-in-out left-0 right-0 top-20 `}
    >
      {navlist?.map((item, index) => {
        return (
          <div
            key={index}
            className={`rounded-xl group w-full ${visible  && 'animate-fade-in-down'}  borderGrd p-8 relative flex items-center justify-center `}
          >
            <Image
              alt="img"
              src={'/assets/arrow.svg'}
              width={200}
              height={300}
              className="w-4 absolute group-hover:translate-x-1 transition-all duration-300 top-4 right-5"
            />
            <Link href={item?.link_url}>
              <div>
                <h1 className="text-xl font-semibold text-white">
                  {item?.link_heading}
                </h1>
                <p className="text-sm font-light text-gray-300 mt-1 ">
                  {item?.link_description}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DropDownBig;
