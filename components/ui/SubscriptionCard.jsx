import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SubscriptionCard = ({ data }) => {
  return (
    <div className="p-5 lg:p-10 flex flex-col border border-gray-600 border-button-border rounded-2xl max-w-md text-white bg-gradient-to-b from-[#020a0b] from-0% via-[#0C1516] to-[#020a0b]">
      <p className="font-semibold text-xl mb-6">{data.label}</p>
      <p className="font-semibold text-4xl mb-3 font-title-font">
        ${data.price} {data.type === 'monthly' && '/ mo'}
      </p>
      <p className="text-base text-gray-300 mb-3">{data.short_headline}</p>
      <p className="text-base">{data.description}</p>

      <Link
        href={data.btn_url || '#'}
        className="flex w-full items-center justify-center py-8 mb-5 border-b border-white/20"
      >
        <Button label={data.btn_text} className='w-full hover:bg-transparent hover:text-white transition-all duration-200' />
      </Link>

      <div>
        <p className="text-xl">SERVICES:</p>
        <div className="flex flex-col space-y-3 my-3">
          {data.services?.map((service, index) => (
            <div
              key={index}
              className={cn(
                'text-sm flex items-center gap-4',
                !service.available && 'text-[#6B6B6B]'
              )}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.46 22.155a1.5 1.5 0 0 0-.933-1.062L28.72 17.042l2.75-13.749a1.5 1.5 0 0 0-2.568-1.317l-21 22.5a1.5 1.5 0 0 0 .57 2.427l10.806 4.053-2.75 13.749a1.499 1.499 0 0 0 2.568 1.318l21-22.5a1.5 1.5 0 0 0 .363-1.367"
                  fill="currentColor"
                />
              </svg>
              <p>{service.service}</p>
            </div>
          ))}
        </div>
        <p className="text-xl">FEATURES:</p>
        <div className="flex flex-col space-y-3 my-3">
          {data.features?.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'text-sm flex items-center gap-4',
                !feature.available && 'text-[#6B6B6B]'
              )}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.46 22.155a1.5 1.5 0 0 0-.933-1.062L28.72 17.042l2.75-13.749a1.5 1.5 0 0 0-2.568-1.317l-21 22.5a1.5 1.5 0 0 0 .57 2.427l10.806 4.053-2.75 13.749a1.499 1.499 0 0 0 2.568 1.318l21-22.5a1.5 1.5 0 0 0 .363-1.367"
                  fill="currentColor"
                />
              </svg>
              <p>{feature.feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
