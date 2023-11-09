import Button from './ui/Button';
import BackLightEffect from './ui/BackLightEffect';
import Image from 'next/image';

const HeroSection = () => {
  const logos = [
    { id: 1, image: '/assets/companies/weframetech.svg' },
    { id: 2, image: '/assets/companies/Clippathgroup.svg' },
    { id: 3, image: '/assets/companies/insta360.svg' },
    { id: 4, image: '/assets/companies/lulu.svg' },
    { id: 5, image: '/assets/companies/Heritage.svg' },
    { id: 6, image: '/assets/companies/capitallogo.svg' },
    { id: 7, image: '/assets/companies/samsung.svg' },
    { id: 8, image: '/assets/companies/Lamborghini.svg' },
    { id: 9, image: '/assets/companies/Keeway.svg' },
    { id: 10, image: '/assets/companies/ferrari.svg' },
    { id: 11, image: '/assets/companies/benelli.svg' },
    { id: 12, image: '/assets/companies/zeiss.svg' },
    { id: 13, image: '/assets/companies/bentley.svg' },
    { id: 14, image: '/assets/companies/williams.svg' },
    { id: 15, image: '/assets/companies/oneplus.svg' },
  ];
  return (
    <div className="h-[90vh] gap-5 lg:h-[80vh] text-center text-white w-full flex flex-col justify-evenly py-10 items-center relative">
      <div className="lg:w-[60%] w-[85%] z-30  flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-title-font">
          Jamstack & Headless <br /> Commerce Agency
        </h1>
        <div className="lg:w-[70%] w-[90%]">
          <p className="text-base font-light my-7 text-gray-300">
            We recognize the demand for high-speed, secure, and easily scalable
            websites. Leveraging the power of Jamstack, we deliver an
            exceptional web development experience tailored to your specific
            requirements, Get an instant quote for your project.
          </p>
        </div>
        <div className="gap-5 flex flex-col lg:flex-row">
          <Button variant="filled" label="Instant Quotation" />
          <Button variant="outline" label="Book a Meeting" />
        </div>
      </div>
      <div className="absolute h-full w-full z-20 bg-[url('/assets/matrix.svg')] bg-cover bg-bottom"></div>
      <div className="w-full flex justify-center relative">
        <div className="w-full z-30  flex flex-col md:mt-6 items-center justify-end gap-2">
          <p className="md:mb-6 text-xl font-normal">Trusted by</p>
          <div className=" relative mt-5 sm:mt-0 w-full md:w-[60vw] overflow-hidden block [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex">
              <div className="flex animate-slidehorizontal">
                {logos.map((logo) => {
                  return (
                    <div
                      className="relative h-8 md:h-12 w-20  mx-4 "
                      key={logo.id}
                    >
                      <Image
                        src={logo.image}
                        className="object-contain"
                        alt="samsung"
                        fill
                      />
                    </div>
                  );
                })}
                {logos.map((logo) => {
                  return (
                    <div
                      className="relative h-8 md:h-12 w-20  mx-4 "
                      key={logo.id}
                    >
                      <Image
                        src={logo.image}
                        className="object-contain"
                        alt="samsung"
                        fill
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex animate-slidehorizontal">
                {logos.map((logo) => {
                  return (
                    <div
                      className="relative h-8 md:h-12 w-20  mx-4 "
                      key={logo.id}
                    >
                      <Image
                        src={logo.image}
                        className="object-contain"
                        alt="samsung"
                        fill
                      />
                    </div>
                  );
                })}
                {logos.map((logo) => {
                  return (
                    <div
                      className="relative h-8 md:h-12 w-20  mx-4 "
                      key={logo.id}
                    >
                      <Image
                        src={logo.image}
                        className="object-contain"
                        alt="samsung"
                        fill
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex animate-slidehorizontal">
                {logos.map((logo) => {
                  return (
                    <div
                      className="relative h-8 md:h-12 w-20  mx-4 "
                      key={logo.id}
                    >
                      <Image
                        src={logo.image}
                        className="object-contain"
                        alt="samsung"
                        fill
                      />
                    </div>
                  );
                })}
                {logos.map((logo) => {
                  return (
                    <div
                      className="relative h-8 md:h-12 w-20  mx-4 "
                      key={logo.id}
                    >
                      <Image
                        src={logo.image}
                        className="object-contain"
                        alt="samsung"
                        fill
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 min-[450px]:-top-1/2">
          <BackLightEffect />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
