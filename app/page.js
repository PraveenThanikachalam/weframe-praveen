import FaqComponent from '@/components/FaqComponent';

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
      <HeroSection/>
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
