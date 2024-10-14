'use client';

import SvgRenderer from '@/lib/svg_renderer';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const SectionCardItem = ({ className, data, type, index }) => (
  <div
    className={cn(
      'relative z-10 flex flex-col p-6 rounded-2xl bg-gradient-to-br from-[#1FBCCB1F] via-[#020C0D] to-transparent hover:shadow-sm hover:shadow-cyan-500 text-white',
      type === 'section1'
        ? 'bg-none rounded-none py-5 md:py-0 hover:shadow-none flex gap-2 md:first:pt-20 md:last:pb-20 md:last:pt-12 '
        : 'border border-gray-600',
      type === 'section2' && 'min-h-[180px]',
      type === 'section4' && 'gap-2',
      type === 'section1' && index === 2 && 'justify-end',
      className
    )}
  >
    <div
      className={cn(
        'w-full flex',
        type === 'section1' &&
          'p-3 border-2 border-gray-600 w-max rounded-md bg-gradient-to-br from-[#1FBCCB1F] via-[#020C0D] to-transparent',
        type === 'section2' && 'ml-auto w-20',
        type === 'section4' && 'mb-5'
      )}
    >
      <SvgRenderer
        className={cn('flex h-14 w-14', type === 'section1' && 'h-10 w-10')}
        svgText={data.icon}
      />
    </div>
    <p
      className={cn(
        'text-xl lg:text-3xl font-semibold text-left mt-auto',
        type === 'section1' && 'mt-0',
        type == 'section2' &&
          'bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#999999] w-full  '
      )}
    >
      {data.title}
    </p>
    <p
      className={cn(
        'text-left',
        type === 'section4' && 'text-gray-300',
        type === 'section1' && 'text-gray-300'
      )}
    >
      {data.description}
    </p>
  </div>
);

const CollapsibleCard = ({ data, index, expanded, setExpanded }) => {
  const [showText, setShowText] = useState(false);
  const isExpanded = index === expanded;

  useEffect(() => {
    let timer;
    if (isExpanded) {
      timer = setTimeout(() => {
        setShowText(true);
      });
    } else {
      setShowText(false);
    }
    return () => clearTimeout(timer);
  }, [isExpanded]);

  return (
    <div
      onClick={() => {
        if (isExpanded) return;
        setExpanded(index);
      }}
      className={cn(
        'flex items-center justify-center px-6 py-10 rounded-2xl bg-gradient-to-br from-[#1FBCCB1F] via-[#020C0D] to-transparent hover:shadow-sm hover:shadow-cyan-500 border border-gray-600 text-gray-300 h-[420px]',
        isExpanded ? 'w-full' : 'md:w-1/3 w-full'
      )}
      style={{
        transition: 'width 0.3s ease-in',
      }}
    >
      <div className="flex flex-col items-center overflow-hidden">
        <SvgRenderer className={'flex h-24 w-24'} svgText={data.icon} />
        <p className="font-mono mt-3">{data.title}</p>
        <p
          className={cn(
            'overflow-hidden text-sm md:text-base lg:text-lg mt-8 transition-opacity duration-300 line-clamp-6',
            showText
              ? 'opacity-100 translate-y-0 max-h-[180px]'
              : 'md:opacity-0 md:translate-y-full md:max-h-0'
          )}
          style={{
            transition: 'max-height 0.3s ease-in',
          }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

const SectionCard = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div
      className={cn(
        'w-full max-w-screen-xl',
        data.type === 'section1' && 'flex flex-col gap-8 md:gap-0 md:flex-row',
        data.type === 'section2' &&
          'section_with_blur text-center flex flex-col gap-16',
        data.type === 'section3' && 'text-center flex flex-col gap-16',
        data.type === 'section4' && 'flex flex-col text-center gap-16'
      )}
    >
      <div
        className={cn(
          '',
          data.type === 'section1' && 'md:flex-[1.5] text-center md:text-left'
        )}
      >
        <h1
          className={cn(
            'lg:text-5xl text-2xl md:text-4xl text-white font-bold mb-1.5',
            data.type === 'section1' && 'gradient-text',
            data.type === 'section2' && ''
          )}
        >
          {data?.title}
        </h1>
        <p
          className={cn(
            'text-gray-300 font-light md:text-xl',
            data.type === 'section2' && 'max-w-3xl mx-auto',
            data.type === 'section4' && 'max-w-3xl mx-auto'
          )}
        >
          {data?.description}
        </p>
      </div>
      <div
        className={cn(
          'grid md:px-4',
          data.type === 'section1' &&
            'md:flex-[2.5] grid md:grid-cols-2 grid-cols-1',
          data.type === 'section2' &&
            'grid-cols-2 md:grid-cols-6 gap-y-5 md:gap-5 lg:gap-10',
          data.type === 'section3' &&
            'md:flex grid grid-cols-1 items-stretch gap-5',
          data.type === 'section4' && 'grid grid-cols-1 md:grid-cols-2 gap-5'
        )}
      >
        {data.cards?.map((card, index) => {
          if (data.type === 'section3')
            return (
              <CollapsibleCard
                key={index}
                data={card}
                index={index}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            );
          else
            return (
              <SectionCardItem
                key={index}
                data={card}
                type={data.type}
                index={index}
                className={cn(
                  data.type === 'section2' && index >= 3
                    ? 'col-span-3 lg:flex-row-reverse'
                    : 'col-span-2 ',
                  data.type === 'section4' && 'col-span-1 py-8',
                  data.type === 'section1' && 'col-span-1'
                )}
              />
            );
        })}
      </div>
    </div>
  );
};

export default SectionCard;
