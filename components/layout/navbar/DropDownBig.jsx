import Link from 'next/link';
import Image from 'next/image';

const DropDownBig = ({ visible, setVisible, navlist }) => {
  return (
    <div
      className={`absolute laptop w-full animate-fade-in-down z-50 bg-gradient-to-br from-[#0b191a] to-[#020c0d]   border-b border-gray-700 p-5  gap-5 ${
        visible ? 'flex ' : 'hidden'
      } flex-wrap items-start justify-center left-0 right-0 top-20 `}
    >
      {navlist?.map((item, index) => {
        return (
          <div
            key={index}
            style={{ zIndex: '200' }}
            className=" rounded-xl w-[45%] borderGrd p-8 relative  flex items-center justify-center"
          >
            <Image
              alt="img"
              src={'/assets/arrow.svg'}
              width={200}
              height={300}
              className="w-4 absolute top-4 right-4"
            />
            <Link href={item?.link_url} onClick={() => setVisible(!visible)}>
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
