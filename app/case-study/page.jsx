import React from 'react';
import TagButton from '@/components/ui/TagButton';
import StoryCard from '@/components/successstory/StoryCard';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/NudgeCard';
import Image from 'next/image';

const CaseStudy = () => {
  return (
    <main>
      <div>
        <Image
          width={0}
          height={0}
          src="/assets/matrix.svg"
          className="absolute -z-20 top-0 left-0 w-full right-0"
          alt=""
        />
      </div>
      <div className="w-full lg:h-[60vh] md:h-[60vh] h-[80vh] flex items-center justify-center">
        <div className="lg:w-[70%] w-[90%] flex flex-col items-center justify-center">
          <div className="">
            <h1 className="lg:text-5xl md:text-5xl text-4xl text-center font-title-font text-accent-blue">
              Discover Success and Excellence
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 w-full p-4 flex-wrap">
            <TagButton name={'All Case Studies'} selected />
            <TagButton name={'Headless Commerce Development'} />
            <TagButton name={'MVP & POC Development'} />
            <TagButton name={'Custom Software Development'} />
            <TagButton name={'Product Design Services'} />
            <TagButton name={'CTO as a Service'} />
            <TagButton name={'API Development'} />
            <TagButton name={'Headless Commerce Development'} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 items-center justify-center">
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

      <div className="w-full mt-16 footer h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </main>
  );
};

export default CaseStudy;
