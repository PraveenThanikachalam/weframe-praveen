import Button from '../ui/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const HeroIcons = dynamic(() => import('./HeroIcons'),{ssr:false});

const HeroSection = ({ heroData }) => {
  return (
    <div className="h-[90vh] max-w-screen-xl mx-auto gap-10 text-center  text-white w-full flex flex-col justify-evenly py-10  items-center relative">
      <div className="lg:w-[60%] w-full z-30  flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-title-font">
          {heroData?.hero_title}
        </h1>
        <div className="lg:w-[70%] w-full">
          <p className="text-base font-light my-2 md:my-7 text-gray-200">
            {heroData?.hero_desc}
          </p>
        </div>
        <div className="gap-2 md:gap-5 flex flex-col lg:flex-row">
          <Link href={`${heroData?.button1_url}`}>
            <Button variant="filled" label={heroData?.button1_text} />
          </Link>
          <Link href={`${heroData?.button2_url}`}>
            <Button variant="outline" label={heroData?.button2_text} />
          </Link>
        </div>
      </div>

      <HeroIcons heading={heroData?.icons_heading} icons={heroData?.icons} />
    </div>
  );
};

export default HeroSection;
