import React from 'react';
import TagButton from '@/components/ui/TagButton';
import StoryCard from '@/components/successstory/StoryCard';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/NudgeCard';
import Image from 'next/image';
import Matrix from '@/components/ui/Matrix';

const CaseStudy = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
      <Matrix />
      <div className="w-full lg:my-28 my-20  flex items-center justify-center">
        <div className="lg:w-[80%] w-[90%] flex flex-col items-center justify-center">
          <div className="">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center font-title-font gradient-text ">
              Discover Success and Excellence
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 w-full p-4 flex-wrap">
            <TagButton name={'All Case Studies'} selected />
            <TagButton name={'Headless Commerce Development'} />
            <TagButton name={'MVP & POC Development'} />
            <div className="lg:flex md:flex hidden items-center justify-center gap-2 w-full  flex-wrap">
              <TagButton name={'Custom Software Development'} />
              <TagButton name={'Product Design Services'} />
              <TagButton name={'CTO as a Service'} />
              <TagButton name={'API Development'} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 items-center justify-center">
        <StoryCard slide={false} video={true} />
        <StoryCard slide={false} />
        <StoryCard slide={false} />
      </div>
      <div className="w-full flex items-center justify-center my-16">
        <Button variant="outline" label={'See More Case Studies'} />
      </div>
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <div className="w-[100vw] mt-16 footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </main>
  );
};

export default CaseStudy;
