'use client';
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
const FaqComponent = () => {
  return (
    <div className="faq w-full flex my-48 items-center text-center justify-center flex-col">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Got questions? <br /> We got answers
        </h1>
      </div>
      <div className="lg:w-[70%] w-[80%] mt-16">
        <Accordion type="single" collapsible className="w-full text-[#ebebeb]">
          <AccordionItem value="item-1" className="borderGrd px-4 mt-3">
            <AccordionTrigger>
              What is Headless Commerce and Jamstack Development?
            </AccordionTrigger>
            <AccordionContent className="text-[#999999] text-left">
              Jamstack (JavaScript, APIs, and Markup) is a web development
              architecture that emphasizes the separation of content from
              presentation. It promotes faster loading times, improved security,
              and scalability by relying on APIs and pre-rendering content. At
              our agency, we specialize in combining the power of headless
              commerce and Jamstack development to create high-performance,
              flexible, and scalable e-commerce solutions for our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="borderGrd px-4 mt-3">
            <AccordionTrigger>
              What are the Benefits of Headless Commerce and Jamstack
              Development?
            </AccordionTrigger>
            <AccordionContent className="text-[#999999] text-left">
              Jamstack (JavaScript, APIs, and Markup) is a web development
              architecture that emphasizes the separation of content from
              presentation. It promotes faster loading times, improved security,
              and scalability by relying on APIs and pre-rendering content. At
              our agency, we specialize in combining the power of headless
              commerce and Jamstack development to create high-performance,
              flexible, and scalable e-commerce solutions for our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="borderGrd px-4 mt-3">
            <AccordionTrigger>
              Can I Migrate my Existing E-Commerce Platform to a Headless
              Commerce Solution?
            </AccordionTrigger>
            <AccordionContent className="text-[#999999] text-left">
              Jamstack (JavaScript, APIs, and Markup) is a web development
              architecture that emphasizes the separation of content from
              presentation. It promotes faster loading times, improved security,
              and scalability by relying on APIs and pre-rendering content. At
              our agency, we specialize in combining the power of headless
              commerce and Jamstack development to create high-performance,
              flexible, and scalable e-commerce solutions for our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="borderGrd px-4 mt-3">
            <AccordionTrigger>
              How Do You Ensure Mobile Responsiveness in Headless Commerce
              Solution?
            </AccordionTrigger>
            <AccordionContent className="text-[#999999] text-left">
              Jamstack (JavaScript, APIs, and Markup) is a web development
              architecture that emphasizes the separation of content from
              presentation. It promotes faster loading times, improved security,
              and scalability by relying on APIs and pre-rendering content. At
              our agency, we specialize in combining the power of headless
              commerce and Jamstack development to create high-performance,
              flexible, and scalable e-commerce solutions for our clients.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-5" className="borderGrd px-4 mt-3">
            <AccordionTrigger>
              Can I Integrate Third-Party Services and APIs with a Headless
              Commerce System?
            </AccordionTrigger>
            <AccordionContent className="text-[#999999] text-left">
              Jamstack (JavaScript, APIs, and Markup) is a web development
              architecture that emphasizes the separation of content from
              presentation. It promotes faster loading times, improved security,
              and scalability by relying on APIs and pre-rendering content. At
              our agency, we specialize in combining the power of headless
              commerce and Jamstack development to create high-performance,
              flexible, and scalable e-commerce solutions for our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="borderGrd px-4 mt-3">
            <AccordionTrigger>
              How Do You Ensure the Security of Headless Commerce Solution?
            </AccordionTrigger>
            <AccordionContent className="text-[#999999] text-left">
              Jamstack (JavaScript, APIs, and Markup) is a web development
              architecture that emphasizes the separation of content from
              presentation. It promotes faster loading times, improved security,
              and scalability by relying on APIs and pre-rendering content. At
              our agency, we specialize in combining the power of headless
              commerce and Jamstack development to create high-performance,
              flexible, and scalable e-commerce solutions for our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqComponent;
