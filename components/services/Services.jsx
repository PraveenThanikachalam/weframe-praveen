import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="services  my-36 flex flex-col items-center justify-center">
      <div className="w-[80vw] mb-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[35vw] w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="text-gray-500 text-sm mt-3">
            Explore our real-world achievements, where we turn challenges into
            triumphs. These case studies highlight our track record of
            delivering impactful digital solutions for our clients.
          </p>
        </div>
        <div>
          <button className="text-white font-semibold px-4 py-3 mt-4 lg:mt-0 rounded-full border">
            Explore Services
          </button>
        </div>
      </div>
      <div className="flex w-[80%] flex-wrap items-center justify-center lg:justify-between gap-5">
        <ServiceCard title="Jamstack Development" img="spider.svg" />
        <ServiceCard title="Headless Commerce" />
        <ServiceCard title="Custom Software Development" img="circle.svg" />
        <ServiceCard title="MVP & POC Development" img="diamond.svg" />
        <ServiceCard title="UI/UX Designing" />
        <ServiceCard title="CTO as a Service" img="crown.svg" />
      </div>
      <div></div>
    </div>
  );
};

export default Services;
