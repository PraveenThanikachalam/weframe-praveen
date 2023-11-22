import NudgeCard from '@/components/HomePage/NudgeCard';
import ImageGrid from '@/components/about-image-grid/ImageGrid';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-screen-xl mx-auto px-4">
      <div>
        <Image
          width={100}
          height={100}
          src="/assets/matrix.svg"
          className="absolute -z-20 top-0 left-0 right-0 w-full"
          alt=""
        />
      </div>
      <div className="py-16 w-full flex items-center justify-center lg:justify-between">
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4 max-w-min">
          <h1 className="lg:text-5xl lg:leading-snug md:text-5xl md:leading-snug text-4xl leading-snug text-center lg:text-left font-title-font gradient-text whitespace-nowrap">
            Unlocking Digital Potential,
            <br />
            Crafting Future Solutions
          </h1>
          <p className="text-gray-300 font-light text-center lg:text-left">
            Explore our real-world achievements, where we turn challenges into
            triumphs.
            <br />
            These case studies highlight our track record of delivering
            impactful digital solutions for our clients.
          </p>
        </div>

        <ImageGrid />
      </div>
      <div className="w-[100vw] bg-[#031416] mt-16 footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </section>
  );
};

export default AboutPage;
