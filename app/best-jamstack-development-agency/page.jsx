import MediumBox from '@/components/jamstackcomponent/MediumBox';
import SmallBox from '@/components/jamstackcomponent/SmallBox';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/ui/NudgeCard';
import Testimonials from '@/components/HomePage/Testimonials';
import { getJamstackPage } from '@/utils/getJamstackPage';
import Link from 'next/link';

export async function generateMetadata(parent) {
  const seoData = await getJamstackPage();
  if (seoData.SEO) {
    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: seoData?.SEO?.meta_title,
      description: seoData?.SEO?.meta_description,
      alternates: {
        canonical: seoData?.SEO?.canonical_url,
      },
      keywords: seoData?.SEO?.meta_keywords,
      robots: {
        index: true,
        follow: true,
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
    title: 'WeframeTech',
    description:
      'Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.',
  };
}

const Jamstack = async () => {
  const data = await getJamstackPage();
  if (!data) return;

  const techstack = {
    section2_contents: data?.section3_contents,
  };

  return (
    <div className=" w-full px-4 md:px-0  min-h-screen flex flex-col max-w-screen-xl mx-auto md:gap-[120px] gap-[80px] items-center ">
      <div className="w-full z-10  h-[50%] bg-gradient-to-b from-[#1996a291] to-[#020C0D] absolute top-0"></div>
      <div className=" max-w-screen-xl mt-20 gap-5 z-20 flex lg:flex-row flex-col items-center justify-center ">
        <div className="left   h-full flex flex-col items-center justify-center w-full lg:w-[50%]">
          <div className="flex flex-col gap-4 lg:items-start items-center  justify-center">
            <h1 className="lg:text-6xl md:text-6xl text-4xl lg:text-start text-center  font-bold  font-title-font gradient-text">
              {data?.heading_points[0].point} <br />{' '}
              {data?.heading_points[1].point} <br />{' '}
              {data?.heading_points[2].point}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light lg:text-left text-center"
            >
              {data?.description}
            </p>
            <div className="flex gap-3 lg:flex-row flex-col">
              <Link href={`${data?.button1_url}`}>
                <Button label={data?.button1_text} variant="filled" />
              </Link>
              <Link href={`${data?.button2_url}`}>
                <Button label={data?.button2_text} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right lg:w-[50%] w-full flex  flex-wrap items-center justify-center">
          <div
            className={`flex w-full h-auto flex-wrap items-center justify-center gap-3`}
          >
            {data?.hero_cards.map((item, index) => {
              return (
                <SmallBox key={index} label={item.label} icon={item.icon} />
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className=" my-24 max-w-screen-xl z-20 gap-8 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-start">
          <div className="lg:w-[50%] w-full text-center lg:text-left">
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-title-font font-bold">
              {data?.section1_heading}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4"
            >
              {data?.section1_description}
            </p>
          </div>
        </div>
        <div className="w-full ">
          <video
            width="0"
            height="0"
            className="w-full rounded-xl border border-gray-600"
            controls
            preload="none"
            poster={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.section1_thumbnail}`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.section1_media}`}
              type="video/ogg"
            />
          </video>
        </div>
      </div> */}
      <div className="w-full flex flex-col ">
        <div className="w-full mb-8 flex lg:flex-row flex-col gap-5  lg:gap-0 items-center justify-between">
          <h1 className="lg:text-4xl text-3xl md:text-4xl font-title-font text-white font-semibold">
            {data?.section2_heading}
          </h1>
          <Link href={`${data?.section2_btn_url}`}>
            <Button variant="outline" label={data?.section2_btn_text} />
          </Link>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5">
          {data?.section2_cards.map((item, index) => {
            return (
              <MediumBox
                key={index}
                title={item.title}
                desc={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <TechStack techData={techstack} />
      </div>
      <div className="w-full flex justify-center">
        <NudgeCard
          title={data?.section4_heading}
          label={data?.section4_button_text}
          url={data?.section4_button_url}
        />
      </div>
      <Testimonials
        testData={{
          testimonial_heading: data?.testimonial_heading,
          testimonial_cards: data?.testimonial,
        }}
      />{' '}
    </div>
  );
};

export default Jamstack;
