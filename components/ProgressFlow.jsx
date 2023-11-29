import React from 'react';

const ProgressFlow = ({ title, arr }) => {
  return (
    <div className="w-full  flex items-center flex-col gap-5  justify-center ">
      <h1 className="lg:text-5xl md:text-5xl text-4xl  font-bold text-white font-title-font">
        {title}
      </h1>
      <div className="-my-6 flex flex-col items-center justify-center ">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className=" lg:pl-32 py-12 w-full items-center lg:justify-between    lg:flex-row flex-col  flex lg:gap-56 gap-5 lg:text-left text-center"
            >
              <time
                className={` font-nt-adventure  translate-y-0.5 inline-flex items-center justify-center lg:text-5xl md:text-5xl text-3xl font-semibold uppercase  h-6 mb-3 sm:mb-0 ${
                  item.select ? 'text-[#1FBCCB]' : 'text-[#999999]'
                }    rounded-full`}
              >
                {item.title}
              </time>
              <div
                className={`flex flex-col sm:flex-row items-start mb-1  group-last:before:hidden before:absolute before:left-2 sm:before:left-0 ${
                  arr[4] === item ? 'before:h-[0vh]' : 'before:h-[25vh]'
                }  before:px-px ${
                  item.select
                    ? 'before:bg-[#1FBCCB] after:bg-[#9bf7ff] after:border-[#1FBCCB]'
                    : 'before:bg-[#999999] after:bg-[#a7a7a7] after:border-[#676767] '
                }   before:ml-[50vw] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4  after:border-4 after:box-content after:rounded-full after:ml-[50vw] hidden lg:block  after:-translate-x-1/2 after:translate-y-1.5`}
              ></div>

              <div
                className={`${
                  item.select ? 'text-[#1FBCCB]' : 'text-[#999999]'
                } text-sm lg:w-96 md:w-[80%] w-full `}
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
