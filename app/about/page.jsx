import NudgeCard from '@/components/HomePage/NudgeCard';
import ProgressFlow from '@/components/ProgressFlow';
import ImageGrid from '@/components/about-image-grid/ImageGrid';
import CultureComponent from '@/components/about/CultureComponent';
import BackLightEffect from '@/components/ui/BackLightEffect';
import Image from 'next/image';
import React from 'react';


const arr = [
  {
    title: 'Vision',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    select:true
  },
  {
    title: 'Process',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
  },
  {
    title: 'Partnerships',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
  },
  {
    title: 'Partnerships',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
  },
  {
    title: 'Partnerships',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
  },
];

const AboutPage = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto px-3">
      <div>
        <Image
          width={100}
          height={100}
          src="/assets/matrix.svg"
          className="absolute -z-20 top-0 left-0 right-0 w-full"
          alt=""
        />
      </div>
      <div className="py-16 w-full lg:flex-row flex-col z-10 flex items-center justify-center lg:justify-between">
        <div className="flex-1 flex flex-col items-center w-full  lg:items-start gap-4 ">
          <h1 className="lg:text-5xl lg:leading-snug font-bold md:text-5xl md:leading-snug text-4xl leading-snug text-center lg:text-left font-title-font gradient-text  ">
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
        <div className='lg:w-[450px] md:w-[450px] w-80'>

        <ImageGrid />
        </div>
      </div>
      <div className="w-full  flex justify-center relative">
        <div className="w-full z-30  flex flex-col md:mt-6 items-center justify-end gap-2">
          <p className="md:mb-6 text-lg font-medium opacity-0">Trusted by</p>
          <div className=" relative mt-5 flex items-center justify-center sm:mt-0 w-full md:w-[60vw] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex glow">
              <div className="flex flex-col items-center gap-1 justify-center">
               <h1 className='lg:text-5xl text-xl font-bold text-white'>100+</h1>
               <p className='text-white'>Clients</p>
              </div>
              <div className="flex lg:mx-20 mx-10 glow">
              <div className="flex flex-col items-center gap-1 justify-center">
               <h1 className='lg:text-5xl text-xl font-bold text-white '>100+</h1>
               <p className='text-white'>Clients</p>
              </div>
              </div>
              <div className="flex glow">
              <div className="flex flex-col gap-1 items-center justify-center">
               <h1 className='lg:text-5xl text-xl font-bold text-white'>100+</h1>
               <p className='text-white'>Clients</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:-top-16 top-5 ">
          <BackLightEffect />
        </div>
      </div>
      <div className='lg:my-56 mt-28'>
        <ProgressFlow title={'About Us'} arr={arr}/>
      </div>
      <div className='w-full'>
        <CultureComponent/>
      </div>
      <div className="w-[100vw] mt-16 bg-[#031416] footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </section>
  );
};

export default AboutPage;
