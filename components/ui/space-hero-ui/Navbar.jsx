'use client';

import { useState } from 'react';
import Logo from '@/public/updated.png';
import Hamburger from '@/public/for-space-hero/hamburger.png';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineClose } from 'react-icons/md';
import ContactUsBtn from './ContactUs';
import Image from 'next/image';
import Link from 'next/link';
import { sf_pro } from '@/fonts';
import nav from '../../../public/for-space-hero/Nav.png';
import NavLine from '@/public/for-space-hero/NavLine.png';

import ServiceDropdown from './Service_dropdown';
import DropDownBG from '../../../public/for-space-hero/DropDownBG.png';

const Links = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '#services',
    name: 'Services',
  },
  {
    href: '/case-study',
    name: 'Case Studies',
  },
  {
    href: '/about',
    name: 'About Us',
  },
];

const Navbar = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [showItems, setShowItems] = useState(false);
  const [data, setData] = useState(props.NavData);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleMenuOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      setIsClosed(false);
      setShowItems(true);
    }, 800);
  };

  const handleMenuClose = () => {
    setIsOpened(false);
    setIsClosed(true);
    setShowItems(false);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const shutterVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        },
        opacity: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        },
        opacity: {
          duration: 0.2,
          ease: 'easeInOut',
          delay: 0.1,
        },
      },
    },
  };

  return (
    <div
      className={`${sf_pro.className} w-full h-0 sticky flex tracking-wide top-9 md:top-16 z-40 md:px-4 px-2 md:py-0 items-start justify-center`}
    >
      <div className="navbarOuter lg:flex hidden absolute backdrop-blur-sm w-[98vw] lg:w-[93vw] xl:w-[1133px]">
        <Image src={nav} alt=""></Image>
      </div>

      <div className="relative lg:w-[1133px] md:w-[98vw] w-full md:pt-4 text-sm md:text-sm lg:text-[16px] md:pb-4 pb-2 lg:from-transparent lg:to-transparent lg:bg-none border border-transparent bg-clip-border xl:text-lg flex items-center gap-5 md:gap-[20px] lg:gap-[77px] rounded-3xl px-[24px] py-[6px] justify-between z-10 h-auto">
        {/* Gradient border */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr  backdrop-blur-lg p-[1px] rounded-3xl -z-40"
          animate={
            isOpened ? { height: ['100%', 400] } : { height: [400, '100%'] }
          }
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="h-full w-full brightness-200 lg:hidden py-7 flex bg-transparent text-white rounded-3xl">
            <Image
              src={NavLine}
              alt=""
              className="w-full absolute z-40 bottom-0"
            />
            <div
              className={
                isClosed || !isOpened
                  ? ' hidden md:hidden '
                  : 'w-full h-full flex md:hidden pt-20 pb-10 flex-col gap-6 '
              }
            >
              {showItems && (
                <div className="flex flex-col w-full text-2xl text-white gap-2 md:gap-x-[25px] lg:gap-[34px] xl:gap-[64px] items-center h-full mt-[1px] justify-around">
                  {Links.map((items, idx) => (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      custom={idx}
                      animate="visible"
                    >
                      <Link
                        href={items.href}
                        className="bg-gradient-to-b text-transparent from-white via-white/60 to-black bg-clip-text"
                        onClick={
                          items.name === 'Services'
                            ? toggleServicesDropdown
                            : undefined
                        }
                      >
                        {items.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="flex text-white w-auto items-center text-md justify-center gap-[10px] lg:gap-[23px]  ">
                {showItems && (
                  <>
                    <ContactUsBtn />
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="Logo lg:min-w-[210px] flex items-center justify-center w-[130px] md:w-[200px] min-h-[40px]">
          <Image priority src={Logo} alt="company-logo" />
        </div>

        <div className="Elements hidden md:flex w-full xl:w-auto">
          <div className="flex w-full text-white gap-x-2 md:gap-[10px] lg:gap-[24px] xl:gap-[64px] items-center h-full mt-[1px] justify-around">
            {Links.map((items, idx) => (
              <Link
                key={idx}
                className="bg-gradient-to-b md:text-[16px] lg:text-xl text-transparent from-white via-white/60 to-black bg-clip-text"
                href={items.href}
                onClick={
                  items.name === 'Services' ? toggleServicesDropdown : undefined
                }
              >
                {items.name}
              </Link>
            ))}
          </div>
        </div>

        {!isOpened ? (
          <motion.button
            onClick={handleMenuOpen}
            className="text-white w-[82px] h-[35px] items-center gap-x-2 md:hidden justify-center relative flex bg-white/5 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5BD4DD] via-black to-[#5BD4DD] brightness-50 rounded-3xl p-[1px] -z-40">
              <div className="h-full w-full bg-black rounded-3xl"></div>
            </div>
            <Image src={Hamburger} alt="menu" />
            <span className="bg-gradient-to-b font-bold text-transparent from-white via-white/60 to-black bg-clip-text">
              Menu
            </span>
          </motion.button>
        ) : (
          <motion.button
            onClick={handleMenuClose}
            className="w-[82px] h-[35px] flex justify-center md:hidden items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <MdOutlineClose className="w-10 h-10 text-white/20 " />
          </motion.button>
        )}

        <div className="hidden md:flex text-white w-auto items-center justify-center gap-[10px] lg:gap-[23px] z-10 ">
          <ContactUsBtn />
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showServicesDropdown && (
          <motion.div
            className="w-full px-10 py-5 absolute mt-24 grid md:grid-cols-2 grid-cols-1 grid-rows-4 gap-3 items-center justify-center  backdrop-blur-md rounded-b-3xl"
            initial="closed"
            animate="open"
            exit="closed"
            variants={shutterVariants}
            layout
          >
            <Image src={DropDownBG} alt="" className="w-full h-full absolute" />
            {data.nav_items[0].links.map((item, idx) => (
              <ServiceDropdown
                key={idx}
                title={item.link_heading}
                content={item?.link_description}
                url={item.link_url}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
