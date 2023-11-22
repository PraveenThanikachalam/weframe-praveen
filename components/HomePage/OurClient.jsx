import React from 'react';
import Image from 'next/image';

const OurClient = () => {
  const clients = [
    {
      id: 1,
      image: '/assets/client-company/cl1.svg',
      name: 'company name',
    },
    {
      id: 2,
      image: '/assets/client-company/cl2.svg',
      name: 'company name',
    },
    {
      id: 3,
      image: '/assets/client-company/cl3.svg',
      name: 'company name',
    },
    {
      id: 4,
      image: '/assets/client-company/cl4.svg',
      name: 'company name',
    },
    {
      id: 5,
      image: '/assets/client-company/cl5.svg',
      name: 'company name',
    },
    {
      id: 6,
      image: '/assets/client-company/cl6.svg',
      name: 'company name',
    },
    {
      id: 7,
      image: '/assets/client-company/cl7.svg',
      name: 'company name',
    },
    {
      id: 8,
      image: '/assets/client-company/cl8.svg',
      name: 'company name',
    },
    {
      id: 9,
      image: '/assets/client-company/cl9.svg',
      name: 'company name',
    },
    {
      id: 10,
      image: '/assets/client-company/cl10.svg',
      name: 'company name',
    },
    {
      id: 11,
      image: '/assets/client-company/cl11.svg',
      name: 'company name',
    },
    {
      id: 12,
      image: '/assets/client-company/cl12.svg',
      name: 'company name',
    },
  ];
  return (
    <div className=" clients my-16 max-w-screen-2xl w-full flex flex-col gap-14 items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Our Clients</h1>
      <div className="w-[80vw] flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-4 lg:gap-10">
          {clients.map((client) => {
            return (
              <div
                key={client.id}
                className="w-full h-full flex flex-col gap-2 justify-between items-center"
              >
                <Image
                  src={client.image}
                  className="h-auto w-10 md:w-14 lg:w-20 items-center flex-grow"
                  width={0}
                  height={0}
                  alt="img"
                />
                <p className="text-[#999999] text-sm">{client.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
