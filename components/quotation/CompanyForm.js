'use client';

import Button from '../ui/Button';

export default function CompanyForm({ setPage, setCompanyFormSubmitted }) {
  return (
    <>
      <div className="lg:w-[60%] md:w-[75%] w-[90%] mt-6">
        <div className="form w-full flex items-center lg:justify-center justify-center">
          <div className="lg:w-full md:w-[90%] w-full ">
            <div className="flex  lg:flex-row md:flex-row flex-col gap-3 lg:gap-0 md:gap-0 flex-wrap -m-2">
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="WeFrameTech"
                    id="name"
                    name="name"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="help@weframetech.com"
                    id="name"
                    name="name"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+91 42069 42069"
                    id="name"
                    name="name"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Company Website
                  </label>
                  <input
                    type="text"
                    placeholder="weframetech.com"
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
                    Company Size
                  </label>

                  <select className="w-full   font-light rounded-lg border border-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-black h-10 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="Yes">Less than 50</option>
                    <option value="No">More than 50</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="filled"
        label={'Calculate Quote'}
        onClick={() => {
          setPage((prev) => prev + 1);
          setCompanyFormSubmitted((prev) => !prev);
        }}
      />
    </>
  );
}
