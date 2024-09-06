'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import DropDownBig from './DropDownBig';
import MobileNav from './MobileNav';
import SvgRenderer from '@/lib/svg_renderer';
import { usePathname } from 'next/navigation';

const Nav = ({ navData }) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data, setData] = useState(navData);
  const pathname = usePathname()

  useEffect(()=>{
    setVisible(false)
    setVisible2(false)
  },[pathname])

  const navItems = useMemo(() => data?.nav_items || [], [data?.nav_items]);

  return (
    <div
      className={`w-full sticky top-0  z-40 bg-[#020c0d]   ${
        visible ? ' bg-[#020C0D]' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="w-full flex items-center justify-between text-white md:py-7 py-6 md:px-10 px-5">
        <div>
          <Link href={'/'} aria-label="Website logo">
            {/* <SvgRenderer svgText={data?.logo} /> */}
            <Image
              src={'/updated.png'}
              alt="logo"
              width={500}
              height={500}
              className="h-8 w-auto"
            />
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
                    className="cursor-pointer hover:opacity-80 transition-all duration-200 flex gap-1 items-center justify-center"
                  >
                    {item?.label}
                    <span className={`chevron ${visible ? 'up' : 'down'}`} />
                  </div>{' '}
                  <DropDownBig
                    visible={visible}
                    setVisible={setVisible}
                    navlist={item?.links}
                  />{' '}
                </div>
              ) : (
                <Link
                  className="hover:opacity-80 transition-all duration-200 cursor-pointer "
                  key={index}
                  href={item?.url}
                  aria-label="Blogs"
                  prefetch={false}
                >
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
