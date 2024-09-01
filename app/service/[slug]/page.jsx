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

export async function generateMetadata({params},parent) {
  const seoData = await getServicePage(params.slug);
  if (seoData?.seo) {
    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: seoData?.seo?.meta_title,
      description: seoData?.seo?.meta_description,
      alternates: {
        canonical: seoData?.seo?.canonical_url,
      },
      keywords: seoData?.seo?.meta_keywords,
      robots: {
        index: !seoData?.seo?.no_follow,
        follow: !seoData?.seo?.no_index,
        nocache: true,
      },
      openGraph: {
        images: [
          `${process.env.NEXT_PUBLIC_BASE_URL}/assets/${seoData?.seo?.og_image}`,
          ...previousImages,
        ],
      },
    };
  }
  return {
    title: 'WeframeTech',
    description:
      'Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.',
  };
}

const page = async ({ params }) => {
  const data = await getServicePage(params.slug);

  return (
    <div className=" w-full px-4 md:px-0  min-h-screen flex flex-col md:gap-48 overflow-x-hidden gap-[80px] items-center">
      <div className="w-full z-10 h-[50%] bg-gradient-to-b from-[#1996a291] to-[#020C0D] absolute top-0"></div>
      <div className=" max-w-screen-xl md:mt-32 mt-20 gap-5 z-20 flex flex-col items-center justify-center">
        <div className="left h-full flex flex-col items-center justify-center w-full max-w-4xl">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-center font-title-font gradient-text">
              {data.hero_title}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light text-center md:w-[500px] w-full"
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

      {data?.success_stories?.length <= 3 ? (
        <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-8">
          <div className='md:text-start text-center'>
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-bold mb-1.5">
              {data.success_story_title}
            </h1>
            <p className="text-gray-300 font-light md:text-xl">
              {data.success_story_desc}
            </p>
          </div>

          <div className='w-full flex md:flex-row flex-col gap-5 items-center justify-center'>

       
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
             </div>
        </div>
      ) : (
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
      )}

      <div className="flex flex-col items-center w-full max-w-screen-xl">
        <h2 className="text-white w-full text-center font-semibold lg:text-5xl text-2xl md:text-4xl mb-16">
          {data.subscription_heading}
        </h2>
        <div className="flex md:flex-row flex-col md:gap-8 gap-5  max-w-[100vw] ">
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
          heading: data?.case_study_title,
          description: data?.case_study_desc,
          cards: data?.case_studies,
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
