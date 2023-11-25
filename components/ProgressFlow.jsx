import React from 'react';

const ProgressFlow = ({ title, arr }) => {
  return (
    <div className="w-auto  flex items-center flex-col gap-10 py-28 justify-end relative">
      <h1 className='text-4xl font-bold text-white font-title-font'>{title}</h1>
      <div class="-my-6  ">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              class="relative pl-8 sm:pl-32 py-12 w-full  flex gap-36"
            >
              <time
                class={` font-nt-adventure  translate-y-0.5 inline-flex items-center justify-center text-5xl font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ${
                  item.select ? 'text-[#1FBCCB]' : 'text-[#999999]'
                }    rounded-full`}
              >
                {item.title}
              </time>
              <div class={`flex flex-col sm:flex-row items-start mb-1  group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px ${item.select ? 'before:bg-[#1FBCCB] after:bg-[#9bf7ff] after:border-[#1FBCCB]' : 'before:bg-[#999999] after:bg-[#a7a7a7] after:border-[#676767] '  }   sm:before:ml-96 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4  after:border-4 after:box-content after:rounded-full sm:after:ml-96 after:-translate-x-1/2 after:translate-y-1.5`}></div>

              <div
                class={`${
                  item.select ? 'text-[#1FBCCB]' : 'text-[#999999]'
                } text-sm w-96 `}
              >
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressFlow;
