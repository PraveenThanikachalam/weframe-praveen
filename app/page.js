import FaqComponent from '@/components/FaqComponent';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SuccessStory from '@/components/successstory/SuccessStory';
import Services from '@/components/services/Services';
import TechStack from '@/components/techstackcomponents/TechStack';
import NudgeCard from '@/components/NudgeCard';
import OurClient from '@/components/OurClient';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <div className="pattern sec1 lg:h-[115vh] h-[125vh] md:h-[80vh]  z-30 text-center text-white w-full flex flex-col items-center justify-end ">
        <div className="overlay w-full h-[95%] lg:h-[85%] flex flex-col relative items-center justify-between ">
          <img
            src="/assets/glow-beam-part1.png"
            className="absolute opacity-50  w-full h-full object-bottom"
            alt=""
          />
          <HeroSection />
          <div className="w-full z-30  flex flex-col mt-6 items-center justify-center ">
            <p className="mb-8 text-md font-medium">Trusted by</p>
            <div className="flex gap-5 lg:gap-28 mb-5 md:gap-10 lg:mb-10">
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Ownerpreneur.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Heritage.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/capitallogo.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/weframetech.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Clippathgroup.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Group.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-36 h-16 overflow-hidden">
        <img
          src="/assets/glow-beam-part2.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="successStory">
        <SuccessStory />
      </div>
      <div className="techstack">
        <TechStack />
      </div>

      <div className="services">
        <Services />
      </div>

      <div>
        <NudgeCard />
      </div>

      <div className="w-full mt-32">
        <Testimonials />
      </div>

      <div>
        <OurClient />
      </div>

      <div>
        <FaqComponent />
      </div>
    </main>
  );
}
