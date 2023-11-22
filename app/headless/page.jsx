import React from 'react';
import Button from '@/components/ui/Button';
import SmallBox from '@/components/jamstackcomponent/SmallBox';
import MediumBox from '@/components/jamstackcomponent/MediumBox';
import TechStack from '@/components/techstackcomponents/TechStack';
import NudgeCard from '@/components/NudgeCard';
import Testimonials from '@/components/Testimonials';

const Headless = () => {
  return (
    <div className=" w-full lg:px-8 px-6 min-h-screen flex flex-col items-center ">
      <div className="w-full z-10  h-[50%] bg-gradient-to-b from-[#1996a291] to-[#020C0D] absolute top-0"></div>
      <div className=" max-w-screen-xl  z-20 flex lg:flex-row flex-col items-center justify-center ">
        <div className="left my-16  h-full flex flex-col items-center justify-center w-full lg:w-[50%]">
          <div className="flex flex-col gap-4 lg:items-start items-center  justify-center">
            <h1 className="lg:text-6xl md:text-6xl text-4xl lg:text-start text-center  font-bold  font-title-font gradient-text">
              Elevate Ecom with Headless Commerce
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4 lg:text-left text-center"
            >
              Experience e-commerce without constraints. Our headless commerce
              solution offers lightning-fast performance, unmatched
              customization, and seamless integrations. Elevate your online
              store to new heights and explore limitless possibilities with us.
            </p>
            <div className="flex gap-3 lg:flex-row flex-col">
              <Button label={'Move to Jamstack'} variant="filled" />
              <Button label={'Book a Call'} variant="outline" />
            </div>
          </div>
        </div>
        <div className="right lg:w-[50%] w-full flex  flex-wrap items-center justify-center">
          <div className="flex w-full h-auto  flex-wrap items-center justify-center gap-3">
            <SmallBox title={'Global Collaboration'} img={'/assets/headless/h2.svg'} />
            <SmallBox title={'Content Authority'} img={'/assets/headless/h4.svg'} />
            <SmallBox title={'Analytics & Insights'} img={'/assets/headless/h6.svg'} />
            <SmallBox title={'Multilingual Support'} img={'/assets/headless/h1.svg'} />
            <SmallBox title={'Content Reusability'} img={'/assets/headless/h3.svg'} />
            <SmallBox title={'Easy Integration'} img={'/assets/headless/h5.svg'} />
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
        <div className="w-full flex lg:flex-row flex-col  lg:gap-0 items-center justify-between">
          <h1 className="lg:text-4xl text-2xl md:text-4xl font-title-font text-white font-semibold">
            Why Jamstack?
          </h1>
          <Button variant="outline" label={'Learn More'} />
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          <MediumBox title={'Content Authority'} img={'/assets/headless/h4.svg'} desc={'Headless CMS systems provide an intuitive and user-friendly content creation and editing experience.'} />
          <MediumBox title={'Content Reusability'} img={'/assets/headless/h3.svg'} desc={'Content can be easily reused across various platforms, enhancing consistency and saving time.'} />
          <MediumBox title={'Easy Integration'} img={'/assets/headless/h5.svg'} desc={'Jamstack allows you to mix and match various tools and services to build custom solutions.'} />
          <MediumBox title={'Multilingual Support'} img={'/assets/headless/h1.svg'} desc={'Headless CMS solutions often offers robust and varied support for multilingual content management.'} />
          <MediumBox title={'Analytics & Insights'} img={'/assets/headless/h6.svg'} desc={'Headless CMS platforms come with built-in analytics, helping product owners understand their audience.'} />
          <MediumBox title={'Global Collaboration'} img={'/assets/headless/h2.svg'} desc={'Headless CMS systems facilitate collaborative content creation, allowing teams to work together across geographic boundaries.'} />
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

export default Headless;
