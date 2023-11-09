'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <div className="w-full z-50 navbar flex items-center relative justify-between text-white p-10">
      <div>
        <Image
          width={0}
          height={0}
          className="w-auto"
          src="/assets/logo.svg"
          alt=""
        />
      </div>
      <nav className="hidden lg:block">
        <ul className="gap-16 flex text-sm font-medium items-center justify-center">
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className="cursor-pointer"
          >
            Services <i className="ri-arrow-down-s-line"></i>
          </div>
          <Link href={'/case-study'}>Case Studies</Link>
          <Link href={'/blogs'}>Blogs</Link>
          <Link href={'/about'}>About Us</Link>
          <Link href={'/contact'}>Contact</Link>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-5 lg:hidden">
        <Link
          href={'/'}
          onClick={() => {
            setVisible3(!visible3);
          }}
        >
          Services <i className="ri-arrow-down-s-line"></i>
        </Link>

        <i
          onClick={() => {
            setVisible2(!visible2);
          }}
          className="ri-menu-4-line text-3xl"
        ></i>
      </div>
      <div
        className={`absolute laptop w-[95%]  p-5 navbar gap-5 ${
          visible ? 'flex' : 'hidden'
        } flex-wrap items-start justify-center top-20 `}
      >
        <div className=" rounded-xl w-[45%] borderGrd p-8 relative  flex items-center justify-center">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Jamstack Development
            </h1>
            <p className="text-sm font-light text-gray-300 mt-1 ">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
        </div>
        <div className="rounded-xl w-[45%] borderGrd border-2 p-8 relative border-gray-500 flex items-center justify-center">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-xl font-semibold text-white">
              MVP & POC Development
            </h1>
            <p className="text-sm font-light text-gray-300 mt-1 ">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
        </div>
        <div className="rounded-xl w-[45%]  borderGrd border-2 p-8 relative border-gray-500 flex items-center justify-center">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Headless Commerce
            </h1>
            <p className="text-sm font-light text-gray-300 mt-1 ">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
        </div>
        <div className="rounded-xl w-[45%] borderGrd border-2 p-8 relative border-gray-500 flex items-center justify-center">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-xl font-semibold text-white">
              UI/UX Designing
            </h1>
            <p className="text-sm font-light text-gray-300 mt-1 ">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
        </div>
        <div className="rounded-xl w-[45%]  borderGrd border-2 p-8 relative border-gray-500 flex items-center justify-center">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Custom Software Development
            </h1>
            <p className="text-sm font-light text-gray-300 mt-1 ">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
        </div>
        <div className="rounded-xl w-[45%]  borderGrd border-2 p-8 relative border-gray-500 flex items-center justify-center">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-xl font-semibold text-white">
              CTO as a Service
            </h1>
            <p className="text-sm font-light text-gray-300 mt-1 ">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`absolute w-[70%] right-4 top-20 navbar ${
          visible2 ? 'flex' : 'hidden'
        }  flex-col items-center justify-center gap-4`}
      >
        <nav>
          <ul className="gap-8 p-6 rounded-xl glow flex flex-col text-sm font-medium items-center justify-center">
            <Link className="underline" href={'/'}>
              Case Studies
            </Link>
            <Link className="underline" href={'/blogs'}>
              Blogs
            </Link>
            <Link className="underline" href={'/'}>
              About Us
            </Link>
            <Link className="underline" href={'/'}>
              Contact
            </Link>
          </ul>
        </nav>
      </div>

      <div
        className={`absolute mobile w-full   navbar gap-2 p-5 ${
          visible3 ? 'flex' : 'hidden'
        } flex-wrap items-start justify-center left-0 top-20 `}
      >
        <div className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-start">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-md font-semibold text-white">
              Jamstack Development
            </h1>
          </div>
        </div>
        <div className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-start">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-md font-semibold text-white">
              MVP & POC Development
            </h1>
          </div>
        </div>
        <div className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-start">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-md font-semibold text-white">
              Headless Commerce
            </h1>
          </div>
        </div>
        <div className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-start">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-md font-semibold text-white">
              UI/UX Designing
            </h1>
          </div>
        </div>
        <div className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-start">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-md font-semibold text-white">
              Custom Software Development
            </h1>
          </div>
        </div>
        <div className="rounded-xl w-full border-2 p-4 relative border-gray-500 flex items-center justify-start">
          <i className="ri-arrow-right-line absolute text-xl top-4 right-5"></i>
          <div>
            <h1 className="text-md font-semibold text-white">
              CTO as a Service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
