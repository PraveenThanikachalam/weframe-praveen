import CustomCarousel from '@/components/custom_carousel';
import FaqComponent from '@/components/HomePage/FaqComponent';
import StoryCard from '@/components/HomePage/successstory/StoryCard';
import SuccessStoryCard from '@/components/HomePage/successstory/SuccessStoryCard';
import Testimonials from '@/components/HomePage/Testimonials';
import SectionCard from '@/components/service/sectionCard';
import Button from '@/components/ui/Button';
import SubscriptionCard from '@/components/ui/SubscriptionCard';
import SvgRenderer from '@/lib/svg_renderer';
import { getServicePage } from '@/utils/getServicePage';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
  const data = await getServicePage(params.slug);

  return (
    <div className=" w-full px-4 md:px-0  min-h-screen flex flex-col md:gap-80 gap-[80px] items-center">
      <div className="w-full z-10 h-[50%] bg-gradient-to-b from-[#1996a291] to-[#020C0D] absolute top-0"></div>
      <div className=" max-w-screen-xl mt-20 gap-5 z-20 flex flex-col items-center justify-center">
        <div className="left h-full flex flex-col items-center justify-center w-full max-w-4xl">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-center font-title-font gradient-text">
              {data.hero_title}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light text-center"
            >
              {data.hero_description}
            </p>
            <Link href={data.hero_btn_url}>
              <Button
                label={data.hero_btn_text}
                variant="filled"
                className="w-max px-5"
              />
            </Link>

            <SvgRenderer
              svgText={data?.hero_bg_icon}
              className={'w-60 absolute opacity-50 left-[5%] top-[15%]'}
            />
            <SvgRenderer
              svgText={data?.hero_bg_icon}
              className={
                'w-32 rotate-180 absolute opacity-50 right-[5%] top-[50%]'
              }
            />
          </div>
        </div>
      </div>

      <CustomCarousel
        testData={{
          heading: data.success_story_title,
          description: data.success_story_desc,
          cards: data.success_stories,
        }}
        slidesPerView={2.5}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
      >
        {data.success_stories?.map(({ service_stories_id }) => (
          <SuccessStoryCard
            key={service_stories_id.id}
            data={{
              heading: service_stories_id.title,
              description: service_stories_id.description,
              image: service_stories_id.image,
              url: service_stories_id.url,
            }}
          />
        ))}
      </CustomCarousel>

      <div className="flex flex-col items-center w-full max-w-screen-xl">
        <h2 className="text-white w-full text-start font-semibold lg:text-5xl text-2xl md:text-4xl mb-16">
          {data.subscription_heading}
        </h2>
        <div className="flex gap-8 overflow-auto max-w-[100vw] px-4">
          {data.subscription_cards?.map((card) => (
            <SubscriptionCard
              key={card.id}
              data={card.service_subscription_id}
            />
          ))}
        </div>
      </div>

      <>
        {data.sections?.map(({ service_sections_id }) => (
          <SectionCard
            key={service_sections_id.id}
            data={service_sections_id}
          />
        ))}
      </>

      <CustomCarousel
        testData={{
          heading: data.success_story_title,
          description: data.success_story_desc,
          cards: data.success_stories,
        }}
        slidesPerView={1.2}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
      >
        {data.case_studies?.map(({ case_studies_id }) => (
          <StoryCard
            key={case_studies_id.id}
            data={case_studies_id}
            animate={false}
          />
        ))}
      </CustomCarousel>

      <Testimonials
        testData={{
          testimonial_heading: data?.testimonials_heading,
          testimonial_cards: data?.testimonials,
        }}
      />
      <FaqComponent
        faq={{
          faq_heading: data?.faq_heading,
          faq_list: data?.faq_list?.map((item) => ({
            question: item.title,
            answer: item.description,
          })),
        }}
      />
    </div>
  );
};

export default page;
