'use client';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';

export default function QuotationForm({
  formData,
  note,
  setPage,
  companyFormSubmitted,
  setQuoteCost,
  uiux_price,
}) {
  const defaultValues = formData?.reduce((acc, category) => {
    acc[category.heading] = category.choice === 'multiple' ? [] : '';
    return acc;
  }, {});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    let totalDuration = 0;
    let totalPrice = 0;
    const numberOfPages = parseInt(data.no_of_pages) || 1;
    const isUIUXSelected = data['ui-ux'] === 'Yes';

    // For each category find cost and time
    formData?.forEach((category) => {
      const selectedOptionNames = data[category.heading];

      //Multiply est_price with number of pages
      const calculatePrice = (option) => {
        let price = option.estimated_price;
        price *= numberOfPages;

        return price;
      };
      //Multiply est_time with number of pages
      const calculateDuration = (option) => {
        let dur = option.estimated_duration;
        dur *= numberOfPages;

        return dur;
      };

      // Handling for single choice
      if (category.choice === 'single' && selectedOptionNames) {
        const selectedOption = category.options.find(
          (option) => option.name === selectedOptionNames
        );
        if (selectedOption) {
          totalDuration += calculateDuration(selectedOption);
          totalPrice += calculatePrice(selectedOption);
        }
      }

      // Handling for multiple choice
      if (
        category.choice === 'multiple' &&
        Array.isArray(selectedOptionNames)
      ) {
        selectedOptionNames.forEach((optionName) => {
          const selectedOption = category.options.find(
            (option) => option.name === optionName
          );
          if (selectedOption) {
            totalDuration += calculateDuration(selectedOption);
            totalPrice += calculatePrice(selectedOption);
          }
        });
      }
    });

    if (uiux_price && isUIUXSelected) {
      totalPrice += uiux_price * numberOfPages;
    }

    setQuoteCost({ totalCost: totalPrice, totalTime: totalDuration });
    if (companyFormSubmitted) {
      setPage((prev) => prev + 2);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col items-center gap-5"
    >
      <div className="lg:w-[60%] md:w-[75%] w-[90%] mt-6">
        <div className="form w-full flex items-center lg:justify-center justify-center">
          <div className="lg:w-full md:w-[90%] w-full ">
            <div className="flex  lg:flex-row md:flex-row flex-col gap-3 lg:gap-0 md:gap-0 flex-wrap -m-2">
              <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="no_of_pages"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Number of Pages
                  </label>
                  <input
                    type="number"
                    placeholder="23"
                    id="no_of_pages"
                    name="no_of_pages"
                    className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register('no_of_pages', { required: true })}
                  />
                  {errors.no_of_pages && (
                    <span className="text-xs text-cyan-500">
                      This field is required!
                    </span>
                  )}
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
                  <select
                    className="w-full bg-opacity-50 navbar font-light rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 h-10 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    name="ui-ux"
                    defaultValue={'Yes'}
                    {...register('ui-ux')}
                  >
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
        {formData?.map((category, index) => {
          return (
            <div
              key={index}
              className="w-full mt-6 flex flex-col items-start gap-3 justify-center"
            >
              <p className="text-sm text-cyan-200">{category?.heading}</p>
              <div className="flex flex-wrap gap-2">
                {category?.choice === 'multiple' ? (
                  <div className="flex flex-wrap gap-2">
                    {category?.options.map((option, idx) => (
                      <div key={idx} className="relative mt-2">
                        <input
                          type="checkbox"
                          id={`${category?.heading}-${option?.name}`}
                          value={option?.name}
                          className="sr-only"
                          {...register(category?.heading)}
                        />
                        <label
                          htmlFor={`${category?.heading}-${option?.name}`}
                          className={`px-4 py-2 cursor-pointer rounded-2xl text-xs transform duration-100 font-fira-code border border-gray-300 ${
                            Array.isArray(watch(category?.heading)) &&
                            watch(category?.heading)?.includes(option?.name)
                              ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
                              : 'text-[#999999]'
                          }`}
                        >
                          {option?.name}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category?.options.map((option, idx) => (
                      <div key={idx} className="relative mt-2">
                        <input
                          type="radio"
                          id={`${category?.heading}-${option?.name}`}
                          value={option?.name}
                          className="sr-only"
                          {...register(category?.heading)}
                        />
                        <label
                          htmlFor={`${category?.heading}-${option?.name}`}
                          className={`px-4 py-2 cursor-pointer rounded-2xl text-xs transform duration-100 font-fira-code border border-gray-300 ${
                            watch(category?.heading) === option?.name
                              ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
                              : 'text-[#999999]'
                          }`}
                        >
                          {option?.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:w-[60%] w-full flex items-start justify-start">
        <p className="text-cyan-500">{note}</p>
      </div>
      <Button
        type="submit"
        variant="filled"
        label={'Next'}
        onClick={() => {}}
      />
    </form>
  );
}
