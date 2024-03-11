import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/ui/NudgeCard';
import { getDynamicPage } from '@/utils/getDynamicPage';
import Image from 'next/image';
import React from 'react';

export async function generateMetadata({ params }, parent) {
  const seoData = await getDynamicPage(params.service);
  if (seoData && seoData.SEO) {
    const previousImages = (await parent).openGraph?.images || [];
    return {
      metadataBase: new URL(seoData?.SEO?.canonical_url) || '',
      title: seoData?.SEO?.meta_title || '',
      description: seoData?.SEO?.meta_description || '',
      alternates: {
        canonical: seoData?.SEO?.canonical_url || '',
      },
      keywords: seoData?.SEO?.meta_keywords || '',
      robots: {
        index: !seoData?.SEO?.no_follow || '',
        follow: !seoData?.SEO?.no_index || '',
        nocache: true,
      },
      openGraph: {
        images: [
          `${process.env.NEXT_PUBLIC_BASE_URL}/assets/${seoData?.SEO?.og_image}`,
          ...previousImages,
        ] || [],
      },
    };
  }
  return {
    title: `WeframeTech: ${seoData?.heading}`,
    description: seoData?.content,
    keywords: seoData?.tags,
  };
}

const Service = async ({ params }) => {
  const data = await getDynamicPage(params.service);
  if (!data) return;

  const techstack = {
    section2_contents: data?.section1_content,
  };
  return (
    <main className="w-full ">
      <div className="w-full flex items-center justify-center relative z-20">
        <div className="w-full -z-10 absolute h-screen  bottom-0  ">
          <Image
            alt="img"
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.background}`}
            className="w-full h-full object-cover"
            width={200}
            height={200}
            loading="lazy"
          />
          <div className="w-full absolute top-0  h-full bg-black bg-opacity-30 backdrop-blur-sm"></div>
        </div>
        <div className="w-[80%] my-16 flex flex-col items-start gap-10 justify-center">
          <div className="flex flex-wrap gap-2">
            {data?.tags.map((tag, index) => {
              return (
                <button
                  key={index}
                  className="navbar borderGrd cursor-default text-gray-300 px-4 py-1 text-sm rounded-xl"
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold text-white font-title-font">
            {data?.heading}
          </h1>
        </div>
      </div>
      <div className="max-w-screen-lg  md:p-20 p-6  flex items-center justify-center mx-auto text-white ">
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>

      <TechStack techData={techstack} />
      <div className="min-h-[60vh] w-screen p-6  flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>
    </main>
  );
};

export default Service;
