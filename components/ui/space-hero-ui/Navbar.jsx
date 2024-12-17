'use client';

import { useState } from 'react';
import Logo from '@/public/updated.png';
import { motion, AnimatePresence } from 'framer-motion';
import ContactUsBtn from './ContactUs';
import Image from 'next/image';
import Link from 'next/link';
import { sf_pro } from '@/fonts';
import nav from '../../../public/for-space-hero/Nav.png';
import NavLine from '@/public/for-space-hero/NavLine.png';
import { RiCloseFill } from 'react-icons/ri';
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

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div
      className={`${sf_pro.className} w-full h-0 fixed md:sticky flex tracking-wide top-0 md:top-16 z-40 md:px-4 px-2 md:py-0 items-start justify-center`}
    >
      <div className="navbarOuter lg:flex hidden absolute w-[98vw] lg:w-[93vw] xl:w-[1133px]">
        <Image src={nav} alt=""></Image>
      </div>
      <AnimatePresence>
        {' '}
        {isOpened && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 500, damping: 60 }}
            className="bg-[#020708] absolute w-screen h-screen z-[10] md:hidden flex flex-col"
          >
            <div className="radial -right-[60px] absolute w-[600px] h-[700px] -z-10"></div>
            <div className="w-full h-full items-center relative z-20 -translate-y-[1vh] justify-start top-36 flex flex-col gap-y-[3vh] px-9">
              {data.nav_items[0].links.map((item, idx) => (
                <motion.div
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                  custom={idx}
                  key={idx}
                >
                  <Link
                    href={item.link_url}
                    onClick={() => setIsOpened(!isOpened)}
                    className="flex relative w-full justify-between items-center"
                  >
                    <span className="bg-gradient-to-b from-white/10 via-white/60 to-white text-transparent bg-clip-text text-lg">
                      {item.link_heading}
                    </span>
                    <Image
                      src={'/for-space-hero/To-arrow.png'}
                      className="w-6 h-6"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <Image
                      className="absolute brightness-200 w-full h-full mt-[3vh]"
                      width={50}
                      height={50}
                      src={'/for-space-hero/service_line.png'}
                      alt=""
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="w-full relative -z-[1] flex gap-y-5 flex-col pb-[4vh] h-full items-center px-8 justify-end">
              <Link
                onClick={() => setIsOpened(false)}
                href={'/calculator/jamstack-website-cost-calculator-estimator'}
                className="relative w-full h-[46px] md:hidden "
              >
                {' '}
                <div
                  className={`animated-border-box-nav md:hidden w-full h-full`}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <div className="flashlight" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <p className="text-sm text-white tracking-wide font-bold">
                        GET QUOTATION
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={'/contact'}
                onClick={() => setIsOpened(false)}
                style={{}}
                className="contact-shadow relative bg-gradient-to-br w-full h-[46px] rounded-full from-white/90 shadow-white via-transparent to-white/90 p-[1px]"
              >
                {/* <Image src={'/for-space-her0/contact-border.png'} alt="" className='' /> */}
                <span className="text-md rounded-full text-white w-full items-center justify-center h-full flex bg-black">
                  Contact Us
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative lg:w-[1133px] z-10 backdrop-blur-sm pt-2 top-9 md:top-0 md:w-[98vw] w-full md:pt-4 text-sm md:text-sm lg:text-[16px] md:pb-4 pb-2 border border-transparent bg-clip-border xl:text-lg flex items-center gap-5 md:gap-[20px] lg:gap-[77px] rounded-3xl px-[24px] md:py-[6px] justify-between h-auto">
        <motion.div className="absolute inset-0 -z-40">
          <div className="h-full w-full brightness-200 lg:hidden flex bg-transparent text-white rounded-3xl">
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
            ></div>
          </div>
        </motion.div>

        <Link
          href={'/'}
          onClick={() => setIsOpened(false)}
          className="Logo lg:min-w-[210px] flex items-center justify-center w-[130px] md:w-[200px] min-h-[40px]"
        >
          <Image priority src={Logo} alt="company-logo" />
        </Link>

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
          <button
            onClick={handleMenuOpen}
            className="relative w-[90px] h-[44px] md:hidden "
          >
            {' '}
            <div className={`animated-border-box-nav md:hidden w-full h-full`}>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <div className="flashlight" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <p className="text-md bg-gradient-to-b from-white/10 to-white text-transparent bg-clip-text tracking-wide">
                    Menu
                  </p>
                </div>
              </div>
            </div>
          </button>
        ) : (
          <button
            onClick={handleMenuClose}
            className="relative w-[90px] h-[44px] md:hidden -z-10"
          >
            {' '}
            <div className={`animated-border-box-nav md:hidden overflow-hidden w-full h-full`}>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <div className="flashlight1 overflow-hidden -z-50" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <p className="text-md bg-gradient-to-b flex gap-x-1 items-center justify-center from-white/10 to-white text-transparent bg-clip-text tracking-wide">
                    <RiCloseFill className="text-white/50 w-5 h-5" /> Close
                  </p>
                </div>
              </div>
            </div>
          </button>
        )}

        <div className="hidden md:flex text-white w-auto items-center justify-center gap-[10px] lg:gap-[23px] z-10 ">
          <ContactUsBtn />
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showServicesDropdown && (
          <motion.div
            className="w-full px-10 py-5 absolute mt-24 grid md:grid-cols-2 grid-cols-1 grid-rows-4 gap-3 items-center justify-center  backdrop-blur-lg rounded-b-3xl"
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
