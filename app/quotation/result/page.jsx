import Button from '@/components/ui/Button';
import React from 'react';
import Image from 'next/image';
import Matrix from '@/components/ui/Matrix';

const QuoteResult = () => {
  return (
    <main>
      <Matrix />
      <div className="w-full p-8 min-h-[80vh] flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="text-lg font-semibold text-gray-200">
            Your estimate quotation for project requirement is:
          </h1>
          <h1 className="text-6xl text-cyan-200 font-bold">$1,400</h1>
          <p className="text-sm text-gray-300">
            Approximate Duration: 40 hours
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-sm text-gray-300">Start with the project?</p>
          <div className="flex lg:flex-row md:flex-row flex-col gap-4">
            <Button variant="filled" label={'Book a Call'} />
            <Button variant="outline" label={'Change Requirements'} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuoteResult;
