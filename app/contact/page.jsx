import ContactForm from '@/components/contact/ContactForm';
import { getContactUsPage } from '@/utils/getContactUsPage';
import Link from 'next/link';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

export async function generateMetadata(parent) {
  const seoData = await getContactUsPage();
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

const Contact = async () => {
  const data = await getContactUsPage();

  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <section className="max-w-screen-xl mx-auto lg:h-screen flex flex-col items-center justify-center px-4 md:px-0 ">
        <div className="w-full lg:h-[85vh] flex lg:flex-row flex-col">
          <div className="left lg:w-[50%] w-full text-center lg:text-left flex flex-col items-center lg:items-left justify-evenly">
            <div className="w-full  py-8 lg:py-0">
              <h1 className="  lg:text-5xl md:text-5xl text-4xl font-title-font gradient-text font-bold">
                {data?.heading}
              </h1>
              <p
                style={{ color: 'rgba(153, 153, 153, 1)' }}
                className="font-light mt-4"
              >
                {data?.description}
              </p>
            </div>
            <div className=" w-full flex flex-col gap-4 mt-5 lg:mt-0">
              <p className="text-lg font-semibold text-white glow">
                {data?.icons_heading}
              </p>
              <div className="flex gap-5 items-center lg:justify-start justify-center">
                {data?.icons?.map((icon, index) => {
                  return (
                    <Link key={index} href={icon.url ? icon.url : '/contact'}>
                      <div
                        dangerouslySetInnerHTML={{ __html: icon.icon }}
                      ></div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <ContactForm data={data} />
        </div>
      </section>
    </ReCaptchaProvider>
  );
};

export default Contact;
