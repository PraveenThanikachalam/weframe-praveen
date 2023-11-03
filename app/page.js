
import FaqComponent from '@/components/FaqComponent'
import StoryCard from '@/components/StoryCard'
import Backend from '@/components/techstackcomponents/Backend'
import Deployement from '@/components/techstackcomponents/Deployement'
import HeadlessCms from '@/components/techstackcomponents/HeadlessCms'
import MobileFrameworks from '@/components/techstackcomponents/MobileFrameworks'
import Image from 'next/image'


export default function Home() {


  return (
    <main>

      <div className='pattern sec1   text-center text-white w-full flex flex-col items-center justify-end '>

        <div className='overlay w-full h-[85%] flex flex-col relative items-center justify-between '>
          <img src="/assets/glow-beam-part1.png" className='absolute opacity-50  w-full h-full object-bottom' alt="" />
          <div className='w-[60%]  z-40 flex flex-col items-center justify-center'>
            <h1 className='text-7xl font-extrabold'>Jamstack & Headless <br /> Commerce Agency</h1>
            <div className='w-[50%]'>
              <p className='text-base font-light my-7 text-gray-300'>We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.</p>

            </div>
            <div className='gap-5 flex'>
              <button className=' px-5 w-48 py-3 font-medium text-black bg-white rounded-full'>Instant Quotation</button>
              <button className='px-5 w-48 py-3 font-medium text-white glow border  bg-transparent rounded-full'>Case Studies</button>
            </div>
          </div>
          <div className='w-full z-40  flex flex-col mt-6 items-center justify-center '>
            <p className='mb-8 text-md font-medium'>Trusted by</p>
            <div className='flex gap-28 mb-10'>
              <img src="/assets/companies/Ownerpreneur.svg" alt="" />
              <img src="/assets/companies/Heritage.svg" alt="" />
              <img src="/assets/companies/capitallogo.svg" alt="" />
              <img src="/assets/companies/weframetech.svg" alt="" />
              <img src="/assets/companies/Clippathgroup.svg" alt="" />
              <img src="/assets/companies/Group.svg" alt="" />
            </div>
          </div>
        </div>


      </div>
      <div className='w-full h-36 overflow-hidden'>
        <img src="/assets/glow-beam-part2.png" className='w-full h-full object-cover' alt="" />

      </div>
      <div className='successStory my-36 flex flex-col items-center justify-center'>
        <div className='w-[80vw] mb-8 flex items-center justify-between'>
          <div className='w-[35vw]'>
            <h1 className='text-4xl font-bold text-white'>Success stories</h1>
            <p className='text-gray-500 text-sm mt-3'>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>

          </div>
          <div>
            <button className='text-white font-semibold px-4 py-3 rounded-full border'>Explore Case Studies</button>
          </div>
        </div>
        <StoryCard />
      </div>
      <div className='techStack w-full flex flex-col items-center justify-center'>companies/
        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-white'>How we develop for</h1>
          <div className='rounded-xl border w-56 h-12 mt-4 border-gray-400 flex items-center justify-center'>
            <div className='flex items-center justify-center font-semibold text-md w-[50%] h-full text-gray-300'>Web</div>
            <div className='flex items-center justify-center font-semibold text-md w-[50%] h-full rounded-r-xl bg-white text-black'>Mobile</div>
          </div>
        </div>
        <div className='techstackComponents w-full flex flex-col items-center justify-center gap-12'>
          <MobileFrameworks />
          <HeadlessCms />
          <Deployement />
          <Backend />

        </div>

      </div>
      <div className='services  my-36 flex flex-col items-center justify-center'>
        <div className='w-[80vw] mb-8 flex items-center justify-between'>
          <div className='w-[35vw]'>
            <h1 className='text-4xl font-bold text-white'>Services</h1>
            <p className='text-gray-500 text-sm mt-3'>Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients.</p>
          </div>
          <div>
            <button className='text-white font-semibold px-4 py-3 rounded-full border'>Explore Services</button>
          </div>
        </div>
        <div className='flex w-[80%] flex-wrap items-center justify-between gap-5'>
          <div className='serviceCard w-96 h-48 rounded-xl flex items-center justify-center relative border overflow-hidden border-gray-600'>
            <Image src={'/assets/services/spider.svg'} className='absolute right-0' width={80} height={80}></Image>
            <h2 className='text-2xl font-bold text-gray-300 absolute bottom-6 left-6'>Jamstack <br /> Development</h2>
          </div>
          <div className='serviceCard w-96 h-48 rounded-xl relative border overflow-hidden border-gray-600'>
            <h2 className='text-2xl font-bold text-gray-300 absolute bottom-6 left-6'>Headless <br /> Commerce</h2>
          </div>
          <div className='serviceCard w-96 h-48 rounded-xl relative border flex items-center justify-center overflow-hidden border-gray-600'>
            <Image src={'/assets/services/circle.svg'} className='absolute right-0' width={80} height={80}></Image>
            <h2 className='text-2xl font-bold text-gray-300 absolute bottom-6 left-6'>Custom Software <br /> Development</h2>
          </div>
          <div className='serviceCard w-96 h-48 rounded-xl relative border flex items-center justify-center overflow-hidden border-gray-600'>
            <Image src={'/assets/services/diamond.svg'} className='absolute right-0' width={80} height={80}></Image>
            <h2 className='text-2xl font-bold text-gray-300 absolute bottom-6 left-6'>MVP & POC <br /> Development</h2>
          </div>
          <div className='serviceCard w-96 h-48 rounded-xl relative border overflow-hidden border-gray-600'>
            <h2 className='text-2xl font-bold text-gray-300 absolute bottom-6 left-6'>UI/UX Designing</h2>
          </div>
          <div className='serviceCard w-96 h-48 rounded-xl relative flex items-center justify-center border overflow-hidden border-gray-600'>
            <Image src={'/assets/services/crown.svg'} className='absolute right-0' width={80} height={80}></Image>
            <h2 className='text-2xl font-bold text-gray-300 absolute bottom-6 left-6'>CTO as a Service</h2>
          </div>
        </div>
        <div>

        </div>
      </div>

      <div className='w-full mt-16 flex items-center justify-center'>
        <div style={{ background: '#041719' }} className='w-[80%] p-16 rounded-xl border-2 text-center border-cyan-800 flex flex-col items-center justify-center'>
          <h1 className='text-3xl text-cyan-300 font-bold'>Book a discovery <br /> call to witness speed</h1>
          <button className='px-8 mt-8 py-2 rounded-full font-medium bg-white '>Book Now</button>
        </div>
      </div>

      <div className='w-full mt-36  flex items-center justify-center'>
        <div className='w-[80%] flex items-center justify-between'>
          <div>
            <h1 className='text-4xl text-white font-bold'>Hear from Clients</h1>
          </div>
          <div className='flex gap-3'>
            <div className='w-12 h-12 rounded-full border border-white'></div>
            <div className='w-12 h-12 rounded-full border border-white'></div>
          </div>
        </div>

      </div>

      <div className='w-full mt-12 flex items-center justify-end'>
        <div className='clientSay w-[90%]  overflow-scroll  flex flex-col items-start justify-start'>

          <div className=' flex items-start justify-start overflow-scroll  gap-5'>
            <div className='w-[700px] h-96 relative flex items-center justify-center rounded-xl'>
              <img src="/assets/client/client.png" className='h-full w-full rounded-xl' alt="" />
              <div className='w-[90%] absolute bottom-3 flex items-center justify-between'>
                <div className='  w-56 flex items-center justify-center'>
                  <div>
                    <img src="/assets/client/david.png" alt="" />

                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-bold text-white'>David Goggins</p>
                    <p className='text-xs text-gray-200'>CEO, Fit India Movement</p>
                  </div>
                </div>
                <div>
                  <img src="/assets/client/pause.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='absolute top-6 right-6 text-white text-xs font-bold'>View Project</p>
              </div>
            </div>
            <div className='w-[700px] h-96 relative flex items-center justify-center rounded-xl'>
              <img src="/assets/client/client.png" className='h-full w-full rounded-xl' alt="" />
              <div className='w-full h-full bg-black absolute z-10 rounded-xl opacity-90 flex items-center justify-center text-white p-16'>
                Working with WeFrameTech on our Ownerpreneur project has been nothing short of exceptional. Their innovative design and flawless development not only met but exceeded our expectations. The result is a cutting-edge platform that beautifully encapsulates our vision. Their commitment to excellence and dedication to our success made this collaboration truly transformative. We highly recommend WeFrameTech to anyone looking to turn their entrepreneurial dreams into reality.
              </div>
              <div className='w-[90%] absolute z-20 bottom-3 flex items-center justify-between'>
                <div className='  w-56 flex items-center justify-center'>
                  <div>
                    <img src="/assets/client/david.png" alt="" />

                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-bold text-white'>David Goggins</p>
                    <p className='text-xs text-gray-200'>CEO, Fit India Movement</p>
                  </div>
                </div>
                <div>
                  <img src="/assets/client/play.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='absolute top-6 right-6 text-white text-xs font-bold'>View Project</p>
              </div>
            </div>
            <div className='w-[700px] h-96 relative flex items-center justify-center rounded-xl'>
              <div className='w-full h-full bg-black absolute z-10 rounded-xl  flex items-center justify-center text-white p-16'>
                Working with WeFrameTech on our Ownerpreneur project has been nothing short of exceptional. Their innovative design and flawless development not only met but exceeded our expectations. The result is a cutting-edge platform that beautifully encapsulates our vision. Their commitment to excellence and dedication to our success made this collaboration truly transformative. We highly recommend WeFrameTech to anyone looking to turn their entrepreneurial dreams into reality.
              </div>
              <div className='w-[90%] absolute z-20 bottom-3 flex items-center justify-between'>
                <div className='  w-56 flex items-center justify-center'>
                  <div>
                    <img src="/assets/client/david.png" alt="" />

                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-bold text-white'>David Goggins</p>
                    <p className='text-xs text-gray-200'>CEO, Fit India Movement</p>
                  </div>
                </div>

              </div>
              <div>
                <p className='absolute top-6 right-6 text-white text-xs font-bold'>View Project</p>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className=' clients mt-48 w-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-white'>Our Clients</h1>
        <div className='w-[80%] mt-20 flex flex-wrap items-center justify-center gap-16'>
          <div className='w-full flex items-center justify-between'>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
            <div> <Image src={'/assets/client.svg'} width={50} height={50} /> </div>
          </div>


        </div>
      </div>

      <div >
        <FaqComponent/>
      </div>


    </main>
  )
}
