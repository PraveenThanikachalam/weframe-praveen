import NudgeCard from '@/components/HomePage/NudgeCard';
import TagButton from '@/components/ui/TagButton';
import Image from 'next/image';
import React from 'react';

const Page = ({ params }) => {
  return (
    <main className="w-full ">
      <div className="w-full flex items-center justify-center relative z-20">
        <div className="w-full -z-10 absolute bottom-0  ">
          <Image
            alt="img"
            src={'/assets/blogs/blog2.png'}
            className="w-full h-full bg-cover"
            width={200}
            height={200}
          />
          <div className="w-full absolute top-0  h-full bg-black bg-opacity-30 backdrop-blur-sm"></div>
        </div>
        <div className="w-[80%] my-16 flex flex-col items-start gap-10 justify-center">
          <div className="flex flex-wrap gap-2">
            <TagButton
              name={'Headless Commerce Development'}
              color={'text-white'}
            />
            <TagButton name={'MVP & POC Development'} color={'text-white'} />
            <TagButton name={'Product Design Services'} color={'text-white'} />
          </div>
          <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold text-white font-title-font">
            Revolutionizing E-commerce with Headless Commerce
          </h1>
        </div>
      </div>
      <div className="max-w-screen-lg p-20 flex items-center justify-center mx-auto ">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit
          qui ad blanditiis harum molestias sint officia aperiam! Excepturi
          quisquam placeat, soluta consequuntur dolorem molestias illum culpa
          quo ipsum consectetur mollitia eveniet assumenda fuga eaque laboriosam
          dignissimos tempora delectus commodi? Molestias quasi iusto, soluta,
          minima facilis praesentium perspiciatis asperiores repellat labore
          necessitatibus dignissimos temporibus corporis voluptas iure dolore?
          Iusto neque aspernatur beatae, animi illum, fuga doloribus deleniti
          reprehenderit iste hic harum accusamus? Error, modi unde, odit, et
          illo autem veritatis ipsum repellat laborum debitis ab ratione
          delectus consequatur? Nostrum veniam error enim odit, rem accusantium
          qui debitis eum expedita minima.
        </p>
      </div>
      <div className="w-full flex justify-center py-10">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>
    </main>
  );
};

export default Page;
