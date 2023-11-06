
import FaqComponent from '@/components/FaqComponent';
import StoryCard from '@/components/StoryCard';
import TechStack from '@/components/TechStack';


import Image from 'next/image';
import ClientComponent from '@/components/ClientComponent';

export default function Home() {

  return (
    <main>
      <div className="pattern sec1 lg:h-[115vh] h-[125vh] md:h-[80vh]  z-30 text-center text-white w-full flex flex-col items-center justify-end ">
        <div className="overlay w-full h-[95%] lg:h-[85%] flex flex-col relative items-center justify-between ">
          <img
            src="/assets/glow-beam-part1.png"
            className="absolute opacity-50  w-full h-full object-bottom"
            alt=""
          />
          <div className="lg:w-[60%] w-[85%] z-30  flex flex-col items-center justify-center">
            <h1 className="lg:text-7xl text-5xl font-extrabold">
              Jamstack & Headless <br /> Commerce Agency
            </h1>
            <div className="lg:w-[50%] w-[85%]">
              <p className="text-base font-light my-7 text-gray-300">
                We recognize the demand for high-speed, secure, and easily
                scalable websites. Leveraging the power of Jamstack, we deliver
                an exceptional web development experience tailored to your
                specific requirements, Get an instant quote for your project.
              </p>
            </div>
            <div className="gap-5 flex flex-col lg:flex-row">
              <button className=" px-5 w-48 py-3 font-medium text-black bg-white rounded-full">
                Instant Quotation
              </button>
              <button className="px-5 w-48 py-3 font-medium text-white glow border  bg-transparent rounded-full">
                Case Studies
              </button>
            </div>
          </div>
          <div className="w-full z-30  flex flex-col mt-6 items-center justify-center ">
            <p className="mb-8 text-md font-medium">Trusted by</p>
            <div className="flex gap-5 lg:gap-28 mb-5 md:gap-10 lg:mb-10">
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Ownerpreneur.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Heritage.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/capitallogo.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/weframetech.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Clippathgroup.svg"
                alt=""
              />
              <img
                className="w-8 md:w-12 lg:w-12"
                src="/assets/companies/Group.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-36 h-16 overflow-hidden">
        <img
          src="/assets/glow-beam-part2.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="successStory lg:my-36 my-28 flex flex-col items-center justify-center">
        <div className="w-[80vw] mb-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[35vw] text-center lg:text-left w-full">
            <h1 className="text-4xl font-bold text-white">Success stories</h1>
            <p className="text-gray-500 text-sm mt-3">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
          <div>
            <button className="text-white font-semibold px-4 mt-4 lg:mt-0 py-3 rounded-full border">
              Explore Case Studies
            </button>
          </div>
        </div>
        <StoryCard />
      </div>
      <div className="techstack">
        <TechStack />
      </div>
      <div className="services  my-36 flex flex-col items-center justify-center">
        <div className="w-[80vw] mb-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[35vw] w-full text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white">Services</h1>
            <p className="text-gray-500 text-sm mt-3">
              Explore our real-world achievements, where we turn challenges into
              triumphs. These case studies highlight our track record of
              delivering impactful digital solutions for our clients.
            </p>
          </div>
          <div>
            <button className="text-white font-semibold px-4 py-3 mt-4 lg:mt-0 rounded-full border">
              Explore Services
            </button>
          </div>
        </div>
        <div className="flex w-[80%] flex-wrap items-center justify-center lg:justify-between gap-5">
          <div className="serviceCard  borderGrd w-96 h-48 rounded-xl flex items-center justify-center relative border overflow-hidden border-gray-600">
            <Image
              src={'/assets/services/union.svg'}
              className="absolute w-full h-full z-20"
              width={0}
              height={0}
              alt="img"
            />
            <Image
              src={'/assets/services/spider.svg'}
              className="absolute right-0 h-auto w-16"
              width={0}
              height={0}
              alt="img"
            ></Image>
            <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
              Jamstack <br /> Development
            </h2>
          </div>
          <div className="serviceCard  borderGrd w-96 h-48 rounded-xl relative border overflow-hidden border-gray-600">
            <Image
              src={'/assets/services/union.svg'}
              className="absolute w-full h-full z-20"
              width={0}
              height={0}
              alt="img"
            />

            <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
              Headless <br /> Commerce
            </h2>
          </div>
          <div className="serviceCard  borderGrd w-96 h-48 rounded-xl relative border flex items-center justify-center overflow-hidden border-gray-600">
            <Image
              src={'/assets/services/union.svg'}
              className="absolute w-full h-full z-20"
              width={0}
              height={0}
              alt="img"
            />

            <Image
              src={'/assets/services/circle.svg'}
              className="absolute right-0 h-auto w-16"
              width={0}
              height={0}
              alt="img"
            ></Image>
            <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
              Custom Software <br /> Development
            </h2>
          </div>
          <div className="serviceCard  borderGrd w-96 h-48 rounded-xl relative border flex items-center justify-center overflow-hidden border-gray-600">
            <Image
              src={'/assets/services/union.svg'}
              className="absolute w-full h-full z-20"
              width={0}
              height={0}
              alt="img"
            />

            <Image
              src={'/assets/services/diamond.svg'}
              className="absolute right-0 h-auto w-16"
              width={0}
              height={0}
              alt="img"
            ></Image>
            <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
              MVP & POC <br /> Development
            </h2>
          </div>
          <div className="serviceCard  borderGrd w-96 h-48 rounded-xl relative border overflow-hidden border-gray-600">
            <Image
              src={'/assets/services/union.svg'}
              className="absolute w-full h-full z-20"
              width={0}
              height={0}
              alt="img"
            />

            <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
              UI/UX Designing
            </h2>
          </div>
          <div className="serviceCard  borderGrd w-96 h-48 rounded-xl relative flex items-center justify-center border overflow-hidden border-gray-600">
            <Image
              src={'/assets/services/union.svg'}
              className="absolute w-full h-full z-20"
              width={0}
              height={0}
              alt="img"
            />

            <Image
              src={'/assets/services/crown.svg'}
              className="absolute right-0 h-auto w-16"
              width={0}
              height={0}
              alt="img"
            ></Image>
            <h2 className="text-2xl font-bold text-gray-300 absolute bottom-6 left-6">
              CTO as a Service
            </h2>
          </div>
        </div>
        <div></div>
      </div>

      <div className="w-full mt-16 flex items-center justify-center">
        <div
          style={{ background: '#041719' }}
          className="w-[80%]  lg:p-16 p-10 rounded-xl border-2 text-center border-cyan-800 flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl text-cyan-300 font-bold">
            Book a discovery <br /> call to witness speed
          </h1>
          <button className="px-8 mt-8 py-2 rounded-full font-medium bg-white ">
            Book Now
          </button>
        </div>
      </div>


      <div className='w-full mt-32'>
        <ClientComponent/>
      </div>

      <div className=" clients mt-48 w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Our Clients</h1>
        <div className="w-[80%] mt-20 flex flex-wrap items-center justify-center gap-16">
          <div className="w-full flex items-center justify-between">
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
            <div>
              {' '}
              <Image
                src={'/assets/client.svg'}
                className="h-auto w-12"
                width={0}
                height={0}
                alt="img"
              />{' '}
            </div>
          </div>
        </div>
      </div>

      <div>
        <FaqComponent />
      </div>
    </main>
  );
}
