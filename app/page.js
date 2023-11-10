import FaqComponent from '@/components/HomePage/FaqComponent';

import HeroSection from '@/components/HomePage/HeroSection';
import SuccessStory from '@/components/HomePage/successstory/SuccessStory';
import Services from '@/components/HomePage/services/Services';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/HomePage/NudgeCard';
import OurClient from '@/components/OurClient';
import Testimonials from '@/components/HomePage/Testimonials';

export default function Home() {
  return (
    <main>
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
