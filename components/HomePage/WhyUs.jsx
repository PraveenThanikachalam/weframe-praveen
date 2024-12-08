import { Roboto, Inter } from 'next/font/google';
import logo from '@/public/updated.png';
import Border from '@/public/Border.png';
import SplBorder from '@/public/SplBorder.png';
import check from '@/public/check.png';
import x from '@/public/x.png';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['200'],
});

const cardData = {
  free_lancers: {
    title: 'Freelancers',
    logo: null,
    textContent: [
      'Limited bandwidth',
      'Unpredictable availability',
      'Require upfront management',
      'Do not scale well',
      'Isolated from internal team',
      'Few systems and process',
    ],
  },
  we_frame: {
    title: 'WeframeTech',
    logo: logo,
    textContent: [
      'A true enterprise B2B tech partner',
      'Proven process that scales',
      'Dedicated Customer Success Manager',
      'Training and Enablement for your team',
      'Available on Slack for real-time communication',
    ],
  },
  other_agencies: {
    title: 'Other Agencies',
    logo: null,
    textContent: [
      'Communication can be a hassle',
      'Limited area of expertise or specialization',
      'They sell you the “A-team” and give you the “B-Team”',
      'Account managers act as middlemen',
      'Limited cross-functional collaboration',
    ],
  },
};

export default function WhyUs() {
  return (
    <div
      className={`xl:w-[1550px] w-full h-full flex flex-col items-center justify-center px-4 xl:px-40 ${roboto.className}`}
    >
      <div className="flex w-full flex-col lg:flex-row justify-between">
        <p className="text-[35px] font-bold text-white">
          Why choose Weframetech?
        </p>
        <p className={`text-lg text-white lg:w-[600px] ${inter.className}`}>
          Weframetech delivers end-to-end influencer marketing solutions with a
          proven track record of success. We create tailored campaigns that
          drive authentic engagement.
        </p>
      </div>
      <div className="w-full h-1/2 mt-10 flex flex-col lg:flex-row gap-4 justify-center">
        {Object.entries(cardData).map(([key, value], idx) => (
          <div
            key={idx}
            className="lg:w-[415px] w-auto flex justify-center overflow-hidden lg:h-[416px] relative rounded-md"
          >
            {value.title === 'WeframeTech' && (
              <div className="shine z-50 brightness-150"></div>
            )}
            {value.title === 'WeframeTech' ? (
              <Image
                src={SplBorder}
                className="absolute brightness-75 -z-10 w-full h-full"
                alt=""
              />
            ) : (
              <Image src={Border} className="absolute w-full h-full" alt="" />
            )}
            <div className="p-10">
              {value.logo ? (
                <Image src={value.logo} className="w-[200px] mb-6" alt="" />
              ) : (
                <p className="text-2xl bg-gradient-to-b from-white mb-6 to-black text-transparent bg-clip-text font-bold ">
                  {value.title}
                </p>
              )}
              <div className="list-disc list-inside space-y-4">
                {value.textContent.map((text, i) => (
                  <div key={i} className="flex gap-x-">
                    {' '}
                    <Image
                      className="w-5 h-5"
                      src={value.title === 'WeframeTech' ? check : x}
                      alt=""
                    />{' '}
                    <div
                      className={
                        value.title === 'WeframeTech'
                          ? 'flex items-start gap-x-2 text-sm text-white'
                          : 'flex items-start gap-x-2 text-sm text-[#929393]'
                      }
                    >
                      <p className="text-xl font-bold text-white -translate-y-1">
                        ·
                      </p>
                      <p className="text-[16px] tracking-wide leading-6">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
