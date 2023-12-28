'use client';

import Button from '../ui/Button';
import { useForm } from 'react-hook-form';

export default function CompanyForm({ setPage, setCompanyFormSubmitted }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/submitted_quotes`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            company_name: data.name,
            email: data.e_mail,
            phone_number: data.phone,
            company_size: data.size,
            company_website: data.website,
          }),
        }
      );

      if (response.ok) {
        setPage((prev) => prev + 1);
        setCompanyFormSubmitted((prev) => !prev);
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="lg:w-[60%] md:w-[75%] w-[90%] mt-6">
        <div className="form w-full flex items-center lg:justify-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-full md:w-[90%] w-full flex flex-col gap-6"
          >
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
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <span className="text-xs text-cyan-500">
                      This field is required!
                    </span>
                  )}
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="e_mail"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="help@weframetech.com"
                    id="e_mail"
                    name="e_mail"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register('e_mail', { required: true })}
                  />
                  {errors.e_mail && (
                    <span className="text-xs text-cyan-500">
                      This field is required!
                    </span>
                  )}
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="+91 42069 42069"
                    id="phone"
                    name="phone"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-xs text-cyan-500">
                      This field is required!
                    </span>
                  )}
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="website"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Company Website
                  </label>
                  <input
                    type="text"
                    placeholder="weframetech.com"
                    id="website"
                    name="website"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register('website')}
                  />
                </div>
              </div>
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="size"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Company Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    className="w-full font-light rounded-lg border border-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-black h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register('size', { required: true })}
                  >
                    <option value="0-10">Less than 10</option>
                    <option value="10-50">10-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100+">100+</option>
                  </select>
                  {errors.size && (
                    <span className="text-xs text-cyan-500">
                      This field is required!
                    </span>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              variant="filled"
              label={'Calculate Quote'}
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </>
  );
}
