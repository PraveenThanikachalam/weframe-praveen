'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDownBig from './navbar/DropDownBig';
import MobileNav from './navbar/MobileNav';
import SvgRenderer from '@/lib/svg_renderer';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data, setData] = useState('');

  const fetchNav = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/header`,
        {
          headers: {
            Authorization: `Bearer U7yJWzq0QYFGpxnPSbXyZVqbailrMoqm`,
          },
          next: {
            revalidate: 60,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setData(data.data);
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNav();
  }, []);

  return (
    <div className="w-full sticky top-0 bg-opacity-25 z-40 bg-[#020c0d]  bg-transparent backdrop-blur-sm">
      <div className="w-full flex items-center justify-between text-white py-6 px-10">
        <div>
          <Link href={'/'} aria-label="Website logo">
            <SvgRenderer svgText={data?.logo} />
          </Link>
        </div>
        <nav className="hidden lg:block  ">
          <div className="gap-16 flex text-sm font-medium items-center justify-center">
            {data?.nav_items?.map((item, index) => {
              return item?.links ? (
                <>
                  {' '}
                  <div
                    key={index}
                    onClick={() => {
                      setVisible(!visible);
                    }}
                    className="cursor-pointer flex gap-1 items-center justify-center"
                  >
                    {item?.label}
                    <div
                      className={`transition-all duration-300 ${
                        visible ? 'rotate-180' : ''
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
                  </div>{' '}
                  <DropDownBig
                    visible={visible}
                    setVisible={setVisible}
                    navlist={item?.links}
                  />{' '}
                </>
              ) : (
                <Link key={index} href={item?.url} aria-label="Blogs">
                  {item?.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="flex items-center justify-center gap-5 lg:hidden">
          <Image
            onClick={() => {
              setVisible2(!visible2);
            }}
            alt="img"
            src={'/icons/menu.svg'}
            width={200}
            height={300}
            className="h-8 w-auto cursor-pointer"
          />
        </div>
      </div>

      <MobileNav visible2={visible2} setVisible2={setVisible2} navItems={data?.nav_items} />
    </div>
  );
};

export default Navbar;
