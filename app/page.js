import FaqComponent from '@/components/HomePage/FaqComponent';
import HeroSection from '@/components/HomePage/HeroSection';
import SuccessStory from '@/components/HomePage/successstory/SuccessStory';
import Services from '@/components/HomePage/services/Services';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/ui/NudgeCard';
import OurClient from '@/components/HomePage/OurClient';
import Testimonials from '@/components/HomePage/Testimonials';
import getHomeData from '@/data/getHomeData';

export async function generateMetadata(parent) {
  const seoData = await getHomeData();
  if (seoData?.SEO) {
    const previousImages = (await parent).openGraph?.images || [];
    return {
      metadataBase: new URL(seoData?.SEO?.canonical_url),
      title: seoData?.SEO?.meta_title,
      description: seoData?.SEO?.meta_description,
      alternates: {
        canonical: seoData?.SEO?.canonical_url,
      },
      keywords: seoData?.SEO?.meta_keywords,
      robots: {
        index: !seoData?.SEO?.no_follow,
        follow: !seoData?.SEO?.no_index,
        nocache: true,
      },
      openGraph: {
        images: [
          `${process.env.NEXT_PUBLIC_BASE_URL}/assets/${seoData?.SEO?.og_image}`,
          ...previousImages,
        ],
      },
    };
  }
  return {
    title: 'Article not found!',
    description: 'Article not found!',
  };
}

export default async function Home() {
  const data = await getHomeData();
  if (!data) return null;
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <HeroSection
        heroData={{
          hero_title: data?.hero_title,
          hero_desc: data?.hero_desc,
          section1_description: data?.section1_description,
          icons_heading: data?.icons_heading,
          icons: data?.icons,
          button1_url: data?.button1_url,
          button1_text: data?.button1_text,
          button2_url: data?.button2_url,
          button2_text: data?.button2_text,
        }}
      />
      <SuccessStory
        successData={{
          heading: data?.section1_heading,
          description: data?.section1_description,
          btn: data?.section1_btn_text,
          link: data?.section1_btn_url,
          cases: data?.Case_studies,
        }}
      />
      <TechStack
        techData={{
          section2_heading: data?.section2_heading,
          section2_contents: data?.section2_contents,
        }}
      />
      <Services
        servicesData={{
          section3_heading: data?.section3_heading,
          section3_description: data?.section3_description,
          section3_btn_text: data?.section3_btn_text,
          section3_btn_url: data?.section3_btn_url,
          services: data?.Services,
        }}
      />
      <NudgeCard
        title={data?.section4_heading}
        label={data?.section4_button_text}
        url={data?.section4_button_url}
      />
      <Testimonials
        testData={{
          testimonial_heading: data?.testimonials?.testimonial_heading,
          testimonial_cards: data?.testimonials?.testimonial_cards,
        }}
      />
      <OurClient
        clientsData={{
          client_section_heading: data?.client_section_heading,
          clients: data?.clients,
        }}
      />
      <FaqComponent
        faq={{
          faq_heading: data?.faq_heading,
          faq_list: data?.faq_list,
        }}
      />
    </main>
  );
}
