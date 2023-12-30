'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const MobileNav = ({ visible2, setVisible2, navItems }) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();


  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  useEffect(() => {
    setVisible2(false);
  }, [pathname]);


  return (
    <div
      className={`absolute z-50 w-full min-h-96 overflow-x-hidden py-10 animate-fade-in-down top-0 bg-[#020c0d]  ${
        visible2 ? 'flex' : 'hidden'
      } flex-col items-center justify-center gap-4`}
    >
      <Image
        onClick={() => {
          setServicesDropdownOpen(false)
          setVisible2(!visible2);
        }}
        alt="img"
        src={'/icons/close.svg'}
        width={200}
        height={300}
        className="w-6 absolute cursor-pointer top-5 right-5"
      />

      <nav>
        <ul className="gap-8 p-6 rounded-xl glow flex flex-col text-white text-sm font-medium items-center justify-center">
          {
            navItems?.map((item,index)=>{
              return item.links? <>  <div className="group">
              <div
                onClick={toggleServicesDropdown}
                className="cursor-pointer flex text-cyan-500 items-center justify-center gap-1"
              >
                {item?.label}
                <div
                  className={`transition-all duration-300 ${
                    servicesDropdownOpen ? 'rotate-0' : '-rotate-90'
                  }`}
                >
                  <Image
                    alt="img"
                    src={'/icons/dropdown.svg'}
                    width={200}
                    height={300}
                    className="w-3 h-auto"
                  />
                </div>
              </div>
              <ul
                className={`${
                  servicesDropdownOpen ? 'max-h-96 mt-3' : 'max-h-0'
                } space-y-2 text-white flex items-center transition-all duration-500 justify-center flex-col rounded-md w-[90vw] px-4 shadow-lg overflow-hidden`}
              >
                {item.links?.map((val, index) => (
                  <Link className="w-full" href={val?.link_url} key={index}>
                    <div className=" w-full bg-[#020C0D] py-1 border-b border-gray-800 px-5 relative flex items-center justify-center">
                      <div >
                        <h1 className="text-md font-semibold text-white">
                          {val?.link_heading}
                        </h1>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div> </> : <>  <Link className="underline" href={item?.url}>
            {item?.label}
          </Link></>
            })
          }
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
