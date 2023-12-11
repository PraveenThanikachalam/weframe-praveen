import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Jamstack Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/jamstack',
  },
  {
    title: 'MVP & POC Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
  {
    title: 'Headless Commerce',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/headless',
  },
  {
    title: 'UI/UX Designing',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
  {
    title: 'Custom Software Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
  {
    title: 'CTO as a Service',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.',
    link: '/',
  },
];

const DropDownSmall = ({ visible3, setVisible3 }) => {
  return (
    <div
      className={`absolute mobile w-full bg-[#020C0D]  animate-fade-in-down z-50  navbar gap-2 p-5 ${
        visible3 ? 'flex' : 'hidden'
      } flex-wrap items-start justify-center left-0 top-16 `}
    >
      {services.map((item, index) => {
        return (
          <Link
            className="w-full"
            href={item.link}
            key={index}
            onClick={() => setVisible3(!visible3)}
          >
            <div className="rounded-xl w-full bg-[#020C0D] border-2 p-4 relative border-gray-500 flex items-center justify-between">
              <div>
                <h1 className="text-md font-semibold text-white">
                  {item.title}
                </h1>
              </div>
              <Image
                alt="img"
                src={'/assets/arrow.svg'}
                width={200}
                height={300}
                className="w-4 "
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DropDownSmall;
