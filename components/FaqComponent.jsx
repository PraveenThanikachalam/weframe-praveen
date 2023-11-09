'use client';
import React, { useEffect } from 'react';
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
        <div id="accordionExample5  ">
          <div className="rounded-xl  borderGrd border text-left relative  overflow-hidden border-gray-500 text-gray-300 font-medium  mb-5">
            <Image
              width={0}
              heigth={0}
              src="/assets/techstack/effect.svg"
              className="h-auto absolute"
              alt=""
            />
            <h2 className="mb-0 font-bold glow" id="headingOne5">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  "
                type="button"
                data-te-collapse-init
                data-te-target="#collapseOne5"
                aria-expanded="true"
                aria-controls="collapseOne5"
              >
                What is Headless Commerce and Jamstack Development?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne5"
              className="!visible"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="headingOne5"
            >
              <div className="px-5 py-4 text-gray-400 font-light">
                <p>
                  Jamstack (JavaScript, APIs, and Markup) is a web development
                  architecture that emphasizes the separation of content from
                  presentation. It promotes faster loading times, improved
                  security, and scalability by relying on APIs and pre-rendering
                  content. At our agency, we specialize in combining the power
                  of headless commerce and Jamstack development to create
                  high-performance, flexible, and scalable e-commerce solutions
                  for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl  borderGrd border text-left relative  overflow-hidden border-gray-500 text-gray-300 font-medium  mb-5">
            <Image
              width={0}
              heigth={0}
              src="/assets/techstack/effect.svg"
              className="h-auto absolute"
              alt=""
            />
            <h2 className="mb-0 font-bold glow" id="headingOne5">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  "
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
              >
                What are the Benefits of Headless Commerce and Jamstack
                Development?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo5"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div className="px-5 py-4 text-gray-400 font-light">
                <p>
                  Jamstack (JavaScript, APIs, and Markup) is a web development
                  architecture that emphasizes the separation of content from
                  presentation. It promotes faster loading times, improved
                  security, and scalability by relying on APIs and pre-rendering
                  content. At our agency, we specialize in combining the power
                  of headless commerce and Jamstack development to create
                  high-performance, flexible, and scalable e-commerce solutions
                  for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl  borderGrd border text-left relative  overflow-hidden border-gray-500 text-gray-300 font-medium  mb-5">
            <Image
              width={0}
              heigth={0}
              src="/assets/techstack/effect.svg"
              className="h-auto absolute"
              alt=""
            />
            <h2 className="mb-0 font-bold glow" id="headingOne5">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  "
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo6"
                aria-expanded="false"
                aria-controls="collapseTwo5"
              >
                Can I Migrate my Existing E-Commerce Platform to a Headless
                Commerce Solution?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo6"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div className="px-5 py-4 text-gray-400 font-light">
                <p>
                  Jamstack (JavaScript, APIs, and Markup) is a web development
                  architecture that emphasizes the separation of content from
                  presentation. It promotes faster loading times, improved
                  security, and scalability by relying on APIs and pre-rendering
                  content. At our agency, we specialize in combining the power
                  of headless commerce and Jamstack development to create
                  high-performance, flexible, and scalable e-commerce solutions
                  for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl  borderGrd border text-left relative  overflow-hidden border-gray-500 text-gray-300 font-medium  mb-5">
            <Image
              width={0}
              heigth={0}
              src="/assets/techstack/effect.svg"
              className="h-auto absolute"
              alt=""
            />
            <h2 className="mb-0 font-bold glow" id="headingOne5">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  "
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo7"
                aria-expanded="false"
                aria-controls="collapseTwo5"
              >
                How Do You Ensure Mobile Responsiveness in Headless Commerce
                Solutions?{' '}
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo7"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div className="px-5 py-4 text-gray-400 font-light">
                <p>
                  Jamstack (JavaScript, APIs, and Markup) is a web development
                  architecture that emphasizes the separation of content from
                  presentation. It promotes faster loading times, improved
                  security, and scalability by relying on APIs and pre-rendering
                  content. At our agency, we specialize in combining the power
                  of headless commerce and Jamstack development to create
                  high-performance, flexible, and scalable e-commerce solutions
                  for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl  borderGrd border text-left relative  overflow-hidden border-gray-500 text-gray-300 font-medium  mb-5">
            <Image
              width={0}
              heigth={0}
              src="/assets/techstack/effect.svg"
              className="h-auto absolute"
              alt=""
            />
            <h2 className="mb-0 font-bold glow" id="headingOne5">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  "
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo8"
                aria-expanded="false"
                aria-controls="collapseTwo5"
              >
                Can I Integrate Third-Party Services and APIs with a Headless
                Commerce System?{' '}
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo8"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div className="px-5 py-4 text-gray-400 font-light">
                <p>
                  Jamstack (JavaScript, APIs, and Markup) is a web development
                  architecture that emphasizes the separation of content from
                  presentation. It promotes faster loading times, improved
                  security, and scalability by relying on APIs and pre-rendering
                  content. At our agency, we specialize in combining the power
                  of headless commerce and Jamstack development to create
                  high-performance, flexible, and scalable e-commerce solutions
                  for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl  borderGrd border text-left relative  overflow-hidden border-gray-500 text-gray-300 font-medium  mb-5">
            <Image
              width={0}
              heigth={0}
              src="/assets/techstack/effect.svg"
              className="h-auto absolute"
              alt=""
            />
            <h2 className="mb-0 font-bold glow" id="headingOne5">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  "
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo9"
                aria-expanded="false"
                aria-controls="collapseTwo5"
              >
                How Do You Ensure the Security of Headless Commerce Solutions?{' '}
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo9"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div className="px-5 py-4 text-gray-400 font-light">
                <p>
                  Jamstack (JavaScript, APIs, and Markup) is a web development
                  architecture that emphasizes the separation of content from
                  presentation. It promotes faster loading times, improved
                  security, and scalability by relying on APIs and pre-rendering
                  content. At our agency, we specialize in combining the power
                  of headless commerce and Jamstack development to create
                  high-performance, flexible, and scalable e-commerce solutions
                  for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
