'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import DropDownBig from './DropDownBig';
import MobileNav from './MobileNav';
import SvgRenderer from '@/lib/svg_renderer';

const Nav = ({ navData }) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data, setData] = useState(navData);

  const navItems = useMemo(() => data?.nav_items || [], [data?.nav_items]);

  return (
    <div className="w-full sticky top-0 bg-opacity-25 z-40 bg-[#020c0d]  bg-transparent backdrop-blur-sm">
      <div className="w-full flex items-center justify-between text-white md:py-7 py-6 md:px-10 px-5">
        <div>
          <Link href={'/'} aria-label="Website logo">
            {/* <SvgRenderer svgText={data?.logo} /> */}
            <Image src={'/updated.png'} alt='logo' width={500} height={500} className='h-8 w-auto'/>
          </Link>
        </div>
        <nav className="hidden lg:block  ">
          <div className="gap-16 flex text-sm font-medium items-center justify-center">
            {data?.nav_items?.map((item, index) => {
              return item?.links ? (
                <div key={(index + 4) * 208}>
                  {' '}
                  <div
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
                </div>
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

      <MobileNav
        visible2={visible2}
        setVisible2={setVisible2}
        navItems={navItems}
      />
    </div>
  );
};

export default Nav;
