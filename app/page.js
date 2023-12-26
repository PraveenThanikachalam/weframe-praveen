import FaqComponent from '@/components/HomePage/FaqComponent';
import HeroSection from '@/components/HomePage/HeroSection';
import SuccessStory from '@/components/HomePage/successstory/SuccessStory';
import Services from '@/components/HomePage/services/Services';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/ui/NudgeCard';
import OurClient from '@/components/HomePage/OurClient';
import Testimonials from '@/components/HomePage/Testimonials';
import getHomeData from '@/data/getHomeData';

export default async function Home() {
  const data = await getHomeData();
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <HeroSection
        heroData={{
          hero_title: data?.hero_title,
          hero_desc: data?.hero_desc,
          section1_description: data?.section1_description,
          icons_heading: data?.icons_heading,
          icons: data?.icons,
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
        title={'Book a discovery call to witness speed'}
        label={'Book Now'}
      />
      <Testimonials />
      <OurClient />
      <FaqComponent />
    </main>
  );
}
