import BlogCard from '@/components/BlogCard';
import NudgeCard from '@/components/HomePage/NudgeCard';
import TagButton from '@/components/ui/TagButton';
import React from 'react';
import Image from 'next/image';

const Blogs = () => {
  return (
    <main className=" relative overflow-hidden flex flex-col items-center justify-center ">
      <div>
        <Image
          width={0}
          height={0}
          src="/assets/matrix.svg"
          className="absolute -z-20 w-full top-0"
          alt=""
        />
      </div>
      <div className=" max-w-screen-xl  min-h-[60vh] flex items-center justify-center">
        <div className="lg:w-[70%] w-[90%]  flex flex-col items-center justify-center">
          <div className="">
            <h1 className="lg:text-5xl md:text-5xl text-4xl text-center gradient-text font-bold text-accent-blue">
              Stay Ahead with Our Insights
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 w-full p-4 flex-wrap">
            <button
              style={{ fontFamily: 'Fira Mono, monospace' }}
              className="px-4 py-2 rounded-2xl   bg-black text-white border border-cyan-300 shadow-cyan-300 shadow-sm md:text-sm text-xs lg:text-sm"
            >
              All Articles
            </button>
            <TagButton name={'Headless Commerce Development'} />
            <TagButton name={'MVP & POC Development'} />
            <TagButton name={'Custom Software Development'} />
            <TagButton name={'Product Design Services'} />
            <TagButton name={'CTO as a Service'} />
            <TagButton name={'API Development'} />
          </div>
        </div>
      </div>

      <div className="blogs max-w-screen-xl  flex-wrap items-center flex gap-8 justify-center">
        <BlogCard
          title="Decoding the Jamstack: A Primer for E-commerce Entrepreneurs"
          image="/assets/blogs/blog1.png"
          link=""
        />
        <BlogCard
          title="Revolutionizing E-commerce with Headless Commerce"
          image="/assets/blogs/blog2.png"
          link=""
        />
        <BlogCard
          title="The Benefits of Serverless E-commerce with Jamstack"
          image="/assets/blogs/blog3.png"
          link=""
        />
        <BlogCard
          title="Optimizing E-commerce SEO with Jamstack and Headless Commerce"
          image="/assets/blogs/blog4.png"
          link=""
        />
        <BlogCard
          title="Headless Commerce: Unleashing the Power of Customization"
          image="/assets/blogs/blog5.png"
          link=""
        />
        <BlogCard
          title="Jamstack Security: Safeguarding Your E-commerce Business"
          image="/assets/blogs/blog6.png"
          link=""
        />
        <BlogCard
          title="The Future of E-commerce: Trends in Jamstack and Headless Commerce"
          image="/assets/blogs/blog7.png"
          link=""
        />
      </div>

      <div className="min-h-[80vh] w-full p-6 flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <div className="w-full mt-16 footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </main>
  );
};

export default Blogs;
