import BlogCard from '@/components/BlogCard';
import NudgeCard from '@/components/HomePage/NudgeCard';
import TagButton from '@/components/ui/TagButton';
import React from 'react';
import Image from 'next/image';
import Matrix from '@/components/ui/Matrix';

const Blogs = () => {
  return (
    <main className=" max-w-screen-xl mx-auto   px-4 flex flex-col items-center justify-center ">
      <Matrix />
      <div className=" w-full  lg:my-28 my-16 flex items-center justify-center">
        <div className="lg:w-[80%] w-full  flex flex-col items-center justify-center">
          <div className="">
            <h1 className="lg:text-5xl md:text-5xl text-3xl text-center gradient-text font-bold text-accent-blue">
              Stay Ahead with Our Insights
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 w-full p-4 flex-wrap">
            <TagButton name={'All Articles'} selected />
            <TagButton name={'Headless Commerce Development'} />
            <TagButton name={'MVP & POC Development'} />
            <div className="lg:flex md:flex hidden items-center justify-center gap-2 w-full  flex-wrap">
              <TagButton name={'Custom Software Development'} />
              <TagButton name={'Product Design Services'} />
              <TagButton name={'CTO as a Service'} />
              <TagButton name={'API Development'} />
            </div>
          </div>
        </div>
      </div>

      <div className="blogs w-full  flex-wrap items-center flex gap-8 justify-center">
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

      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <div className="w-[100vw] mt-16 footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </main>
  );
};

export default Blogs;
