import dynamic from 'next/dynamic';
import SpaceBackground from '../ui/space-hero-ui/SpaceBackground';
import FlashButton from '../ui/space-hero-ui/FlashButton';
import Companies from '../ui/space-hero-ui/Companies';
import { Libre_Baskerville, Bricolage_Grotesque } from 'next/font/google';
import { sf_pro } from '@/fonts';

const HeroIcons = dynamic(() => import('./HeroIcons'), { ssr: false });

const libreBaskerville = Libre_Baskerville({
  weight: '400',
  style: 'italic',

  subsets: ['latin'],
});

const bircolageGrotesque = Bricolage_Grotesque({
	weight: '400',
	subsets: ['latin'],
}) 

const HeroSection = ({ heroData }) => {
  return (
    <div
      className={`${sf_pro.className} +  " h-[100vh] w-screen text-center text-white z-10 flex flex-col justify-end overflow-hidden items-center relative"`}
    >
      <SpaceBackground />
      <div className="z-0 w-full h-full flex text-center flex-col gap-y-3 mt-4 p-2 md:p-0 -translate-y-36 items-center justify-center absolute top-0">
        <div className="text-center text-2xl mt-8 sm:text-5xl text-transparent bg-gradient-to-tr bg-clip-text from-white via-white/80 to-white/60 font-bold p-3 md:leading-[54px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#31B1D9] to-[#3DD771]">
            Design
          </span>{' '}
          & <span className={libreBaskerville.className}>Jamstack</span> for high <br /> growth B2B
        </div>
        <div className="text-md bg-gradient-to-r leading-7 text-white">
          <span>
            We are a team of JAM stack and branding experts, passionate
          </span>
          <span className="text-white/60">
            <br /> about building sites that set you in the top 1%
          </span>
        </div>
        <FlashButton />
      </div>

      <Companies />
    </div>
  );
};

export default HeroSection;
