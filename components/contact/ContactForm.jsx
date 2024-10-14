'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useReCaptcha } from 'next-recaptcha-v3';
import { verifyRecaptcha } from '@/utils/verifyReCaptchal';

const ContactForm = ({ data }) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (formData) => {
    setLoading(true);
    const token = await executeRecaptcha('form_submit');
    const score = await verifyRecaptcha(token);

    if (score >= 0.4) {
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
          setSuccess(true);
          setShow(true);
          setLoading(false);
          setTimeout(() => {
            setShow(false);
          }, 4000);
          reset();
          setServices([]);
          const responseData = await response.json();
        } else {
          setSuccess(false);
          setShow(true);
          setLoading(false);
          reset();
          console.error('Error submitting the form');
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        reset();
      }
    } else {
      setSuccess(false);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
      reset();
    }

    setLoading(false);
    reset();
  };

  return (
    <div className="right lg:p-5 mt-12 lg:mt-0 lg:w-[50%] w-full h-full flex flex-col lg:items-start items-center justify-evenly">
      {/* Form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form lg:w-full w-[90%] flex items-center lg:justify-start justify-center"
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
                  className={`w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300  focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors?.name && (
                  <p className="text-xs text-white ml-1 mt-1">
                    Name is a required field!
                  </p>
                )}
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
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="help@weframetech.com"
                  id="email"
                  name="email"
                  className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors?.email && (
                  <p className="text-xs text-white ml-1 mt-1">
                    Invalid email address!
                  </p>
                )}
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
                  className="w-full navbar bg-opacity-50 font-light rounded-lg border border-gray-300 h-40 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {errors?.description && (
                  <p className="text-xs text-white ml-1 mt-1">
                    Please type your message!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Services Buttons */}
          <div className="flex flex-col gap-2 item lg:justify-start mt-6 lg:mt-3 justify-center p-5 lg:p-0 items-center lg:items-start">
            <p className="text-base text-cyan-200">{data?.services_heading}</p>
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
              <Link href={data?.button1_url ? data?.button1_url : '/contact'}>
                <Button
                  label={data?.button1_text}
                  variant="outline"
                  className="!py-0 h-[56px]"
                />
              </Link>

              <button
                type="submit"
                className={`px-3 h-[56px] w-56 text-sm md:text-base flex items-center justify-center font-normal rounded-full border border-white bg-white text-black shadow-button-glow`}
              >
                {loading ? (
                  <Image
                    src={'/icons/loader.svg'}
                    alt="loader"
                    width={200}
                    height={200}
                    className="w-7 h-7"
                  />
                ) : (
                  data?.button2_text
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Success Message */}
      <div
        className={` w-[500px] fixed bottom-5 z-50 ${
          show ? 'flex' : 'hidden'
        } my-8 py-3 px-4  transition-all duration-300 rounded-xl flex items-center justify-start gap-3 bg-black border-2 ${
          success ? 'border-cyan-400' : 'border-red-500'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="shrink-0">
          {success ? (
            <Image
              alt="img"
              src={'/assets/contact/sent.svg'}
              width={300}
              height={200}
              className="h-7 w-7"
              loading="lazy"
            />
          ) : (
            <div className="rounded-full  bg-red-500 flex items-center justify-center h-6 w-6">
              <p className="text-black text-lg ">!</p>
            </div>
          )}
        </div>
        <div className="flex flex-col ">
          <p
            className={`${
              success ? 'text-cyan-400' : 'text-red-500'
            } font-semibold text-sm`}
          >
            {' '}
            {success ? 'Message Sent' : 'Failed'}
          </p>
          <p className="text-sm font-light text-white/90">
            {success
              ? ' Your message has been sent to the team. They will get back to you soon.'
              : 'Your message could not be sent. Please try again later.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
