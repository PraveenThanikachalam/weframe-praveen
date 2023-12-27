'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([]);
  const [data, setData] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (formData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/contacted_users`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            description: formData.description,
            services_selected: services,
          }),
        }
      );

      if (response.ok) {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);

        reset();
        setServices([]);
        const responseData = await response.json();
        console.log(responseData.data);
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPage = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/contact_us`
      );
      if (response.ok) {
        const pageData = await response.json();
        setData(pageData.data);
      } else {
        console.error('Error fetching page data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPage();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto h-screen flex flex-col items-center justify-center md:px-4 px-2 lg:px-4 ">
      <div className="w-full lg:h-[85vh] flex lg:flex-row flex-col">
        <div className="left lg:w-[50%] w-full text-center lg:text-left flex flex-col items-center lg:items-left justify-evenly">
          <div className="w-full px-2 py-8 lg:py-0">
            <h1 className="  lg:text-5xl md:text-5xl text-4xl font-title-font gradient-text font-bold">
              {data?.heading}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4"
            >
              {data?.description}
            </p>
          </div>
          <div className=" w-full flex flex-col gap-4 mt-5 lg:mt-0">
            <p className="text-lg font-semibold text-white glow">
              {data?.icons_heading}
            </p>
            <div className="flex gap-5 items-center lg:justify-start justify-center">
              {data?.icons?.map((icon, index) => {
                return (
                  <Link key={index} href={icon.url ? icon.url : '/contact'}>
                    <div dangerouslySetInnerHTML={{ __html: icon.icon }}></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right lg:p-5 mt-12 lg:mt-0 lg:w-[50%] w-full h-full flex flex-col lg:items-start items-center justify-evenly">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form lg:w-full w-[75%] flex items-center lg:justify-start justify-center"
          >
            <div className="lg:w-full md:w-[90%] w-full ">
              <div className="flex lg:flex-row md:flex-row flex-col gap-3 lg:gap-0 md:gap-0 flex-wrap -m-2">
                {/* Name Input */}
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Name
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="Name Surname"
                      id="name"
                      name="name"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="lg:p-2 md:p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      placeholder="help@weframetech.com"
                      id="email"
                      name="email"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="lg:p-2 md:p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Message
                    </label>
                    <textarea
                      {...register('description', { required: true })}
                      id="message"
                      name="description"
                      placeholder="Enter a description"
                      className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Services Buttons */}
              <div className="flex flex-col gap-3 item lg:justify-start mt-6 lg:mt-0 justify-center p-5 lg:p-0 items-center lg:items-start">
                <p className="text-base text-cyan-200">
                  {data?.services_heading}
                </p>
                <div className="flex flex-wrap gap-2 items-center lg:justify-start justify-center">
                  {data?.services?.map((tag, index) => {
                    const isTagSelected = services.some(
                      (service) => service.name === tag
                    );

                    return (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setServices([...services, { name: tag }]);
                        }}
                        key={index}
                        className={`px-4 py-2  ${
                          isTagSelected
                            ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
                            : 'borderGrd text-[#999999]'
                        } rounded-2xl  text-xs font-fira-code`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="my-16 lg:mt-8 w-full flex items-end justify-center ">
                <div className="flex lg:flex-row md:flex-row flex-col w-full items-center lg:justify-end justify-center lg:gap-2 gap-3 ">
                  <Link
                    href={data?.button1_url ? data?.button1_url : '/contact'}
                  >
                    <Button label={data?.button1_text} variant="outline" />
                  </Link>
                  <Button
                    type="submit"
                    label={data?.button2_text}
                    variant="filled"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Success Message */}
          <div
            className={`md:w-[40vw] w-[95%] fixed bottom-5 z-50 ${
              show ? 'flex' : 'hidden'
            } my-8 p-5 transition-all duration-300 rounded-xl flex items-center justify-center gap-3 bg-gradient-to-b from-[#0e292c] to-[#020C0D] border-2 border-cyan-400`}
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div className="p-2">
              <Image
                alt="img"
                src={'/assets/contact/sent.svg'}
                width={300}
                height={200}
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-cyan-400 font-semibold text-sm">
                Message Sent
              </p>
              <p className="text-sm font-light text-white">
                Your message has been sent to the team. They will get back to
                you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
