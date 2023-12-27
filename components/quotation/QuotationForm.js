'use client';
import TagComponent from '../TagComponent';
import Button from '../ui/Button';

const tags = [
  {
    label: 'Nextjs',
    url: '/',
    selected: true,
  },
  {
    label: 'Gatsby',
    url: '/',
  },
  {
    label: 'Nuxtjs',
    url: '/',
  },
  {
    label: 'Astrojs',
    url: '/',
  },
  {
    label: 'React Native',
    url: '/',
  },
  {
    label: 'Expressjs',
    url: '/',
  },
  {
    label: 'Vuejs',
    url: '/',
  },
  {
    label: 'Angularjs',
    url: '/',
  },
  {
    label: 'Svelte',
    url: '/',
  },
  {
    label: 'Bootstrap',
    url: '/',
  },
];

export default function QuotationForm({ formData, setPage }) {
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

      <div className="flex lg:w-[60%] md:w-[60%] w-full flex-col items-center justify-center">
        {formData?.tags?.map((category, index) => {
          return (
            <TagComponent
              key={index}
              title={category.heading}
              labels={category.options}
            />
          );
        })}
      </div>
      <div className="lg:w-[60%] w-full flex items-start justify-start">
        <p className="text-cyan-500">
          Please select one of the options to get your quote
        </p>
      </div>
      <Button
        variant="filled"
        label={'Next'}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      />
    </>
  );
}
