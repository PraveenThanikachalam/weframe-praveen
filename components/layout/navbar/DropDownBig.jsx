import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Jamstack Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/jamstack',
  },
  {
    title: 'MVP & POC Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
  {
    title: 'Headless Commerce',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/headless',
  },
  {
    title: 'UI/UX Designing',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
  {
    title: 'Custom Software Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
  {
    title: 'CTO as a Service',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
];

const DropDownBig = ({ visible, setVisible }) => {
  return (
    <div
      className={`absolute laptop w-full animate-fade-in-down z-50  backdrop-blur-sm border-b border-gray-500 p-5 navbar gap-5 ${
        visible ? 'flex ' : 'hidden'
      } flex-wrap items-start justify-center top-24 `}
    >
      {services.map((item, index) => {
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
            <Link href={item.link} onClick={() => setVisible(!visible)}>
              <div>
                <h1 className="text-xl font-semibold text-white">
                  {item.title}
                </h1>
                <p className="text-sm font-light text-gray-300 mt-1 ">
                  {item.desc}
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
