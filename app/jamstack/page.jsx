import MediumBox from '@/components/jamstackcomponent/MediumBox';
import SmallBox from '@/components/jamstackcomponent/SmallBox';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import Button from '@/components/ui/Button';
import React from 'react';
import NudgeCard from '@/components/HomePage/NudgeCard';
import Testimonials from '@/components/HomePage/Testimonials';

const Jamstack = () => {
  return (
    <div className=" w-full lg:px-8 px-6 min-h-screen flex flex-col items-center ">
      <div className="w-full z-10  h-[50%] bg-gradient-to-b from-[#1996a291] to-[#020C0D] absolute top-0"></div>
      <div className=" max-w-screen-xl  z-20 flex lg:flex-row flex-col items-center justify-center ">
        <div className="left my-16  h-full flex flex-col items-center justify-center w-full lg:w-[50%]">
          <div className="flex flex-col gap-4 lg:items-start items-center  justify-center">
            <h1 className="lg:text-6xl lg:text-start text-center md:text-6xl font-extrabold text-4xl font-title-font text-accent-blue">
              Rock Solid. <br /> Lightning Fast. <br /> Infinitely Scalable.
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4 lg:text-left text-center"
            >
              We recognize the demand for high-speed, secure, and easily
              scalable websites. Leveraging the power of Jamstack, we deliver an
              exceptional web development experience tailored to your specific
              requirements. Get an instant quote for your project
            </p>
            <div className="flex gap-3 lg:flex-row flex-col">
              <Button label={'Move to Jamstack'} variant="filled" />
              <Button label={'Book a Call'} variant="outline" />
            </div>
          </div>
        </div>
        <div className="right lg:w-[50%] w-full flex  flex-wrap items-center justify-center">
          <div className="flex w-full h-auto  flex-wrap items-center justify-center gap-3">
            <SmallBox title={'Enhanced Performance'} img={'jam1'} />
            <SmallBox title={'Super Flexibility'} img={'jam2'} />
            <SmallBox title={'Ensured Security'} img={'jam3'} />
            <SmallBox title={'Infinite Scalability'} img={'jam4'} />
            <SmallBox title={'Developer Friendly'} img={'jam5'} />
            <SmallBox title={'Increased Speed'} img={'jam6'} />
          </div>
        </div>
      </div>

      <div className=" my-24 max-w-screen-xl z-20 gap-8 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-start">
          <div className="lg:w-[50%] w-full text-center lg:text-left">
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-title-font font-bold">
              Video Title Can Be Written Here
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4"
            >
              We recognize the demand for high-speed, secure, and easily
              scalable websites. Leveraging the power of Jamstack, we deliver an
              exceptional web development experience tailored to your specific
              requirements. Get an instant quote for your project
            </p>
          </div>
        </div>
        <div className="w-full">
          <video
            width="0"
            height="0"
            className="w-full  rounded-xl border border-gray-600"
            controls
          >
            <source src="/assets/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="max-w-screen-xl lg:my-24 my-12 flex flex-col gap-16">
        <div className="w-full flex lg:flex-row flex-col gap-5 lg:gap-0 items-center justify-between">
          <h1 className="lg:text-4xl text-2xl md:text-4xl font-title-font text-white font-semibold">
            Why Jamstack?
          </h1>
          <Button variant="outline" label={'Learn More'} />
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          <MediumBox title={'Speed'} img={'jam1'} />
          <MediumBox title={'Scalability'} img={'jam2'} />
          <MediumBox title={'Flexiblility'} img={'jam3'} />
          <MediumBox title={'Security'} img={'jam4'} />
          <MediumBox title={'Developer Friendly'} img={'jam5'} />
          <MediumBox title={'Performance'} img={'jam6'} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center lg:my-24 my-12">
        <TechStack />
      </div>

      <div className="w-full my-24">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <div className="max-w-screen-xl lg:my-24 my-12">
        <Testimonials />
      </div>

      <div className="w-[100vw] p-6 mt-24 min-h-[60vh] flex items-center justify-center footer ">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </div>
  );
};

export default Jamstack;
