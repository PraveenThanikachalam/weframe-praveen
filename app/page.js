import FaqComponent from '@/components/HomePage/FaqComponent';

import HeroSection from '@/components/HomePage/HeroSection';
import SuccessStory from '@/components/HomePage/successstory/SuccessStory';
import Services from '@/components/HomePage/services/Services';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/ui/NudgeCard';
import OurClient from '@/components/HomePage/OurClient';
import Testimonials from '@/components/HomePage/Testimonials';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <SuccessStory />
      <TechStack />
      <Services />
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
