import TagComponent from '@/components/TagComponent';
import Button from '@/components/ui/Button';
import SwitchButton from '@/components/ui/SwitchButton';
import Link from 'next/link';
import React from 'react';

const Quote = () => {
  return (
    <main>
      <div>
        <img
          src="/assets/matrix.svg"
          className="absolute -z-20 top-0 w-full"
          alt=""
        />
      </div>

      <div className="w-full my-16 flex flex-col items-center gap-10 lg:gap-8 justify-center">
        <div className="flex flex-col items-center justify-center text-center lg:w-[50%] w-[80%] gap-5">
          <h1 className="lg:text-5xl md:text-5xl text-3xl text-cyan-200 font-bold font-title-font">
            Get a Quote for Your Development Project
          </h1>
          <SwitchButton
            label1={'Headless E-Commerce'}
            label2={'Jamstack Web Dev'}
          />
        </div>

        <div className='lg:w-[50%] w-[75%] mt-6'>
          <div className="form w-full flex items-center lg:justify-center justify-center">
            <div className="lg:w-full md:w-[90%] w-full ">
              <div className="flex  lg:flex-row md:flex-row flex-col gap-3 lg:gap-0 md:gap-0 flex-wrap -m-2">
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Number of Pages
                    </label>
                    <input
                      type="text"
                      placeholder="23"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      UI/UX Consideration
                    </label>
                 

                    <select className="w-full bg-opacity-50 navbar font-light rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex lg:w-[50%] md:w-[60%] w-full flex-col items-center justify-center'>
            <TagComponent title={'Frontend Technology'} labels={['Nextjs','Gatsby','Nuxtjs','Astrojs','React Native','Expressjs','Vuejs','Angularjs','Svelte','Bootstrap']}/>
            <TagComponent title={'Backend Technology'} labels={['Firebase','Nodejs','Go','Supabase']}/>
            <TagComponent title={'Third-party Integration'} labels={['Nextjs','Gatsby','Nuxtjs','Astrojs','React Native','Expressjs','Vuejs','Angularjs','Svelte','Bootstrap']}/>
            <TagComponent title={'Deployment Platform'} labels={['Vercel','AWS','Digital Ocean','Netlify']}/>

        </div>
        <p>Please select one of the options to get your quote</p>
        <div>
            <Link href={'/quotation/next'}><Button variant='filled' label={'Next'}/></Link>
        </div>
      </div>
    </main>
  );
};

export default Quote;
