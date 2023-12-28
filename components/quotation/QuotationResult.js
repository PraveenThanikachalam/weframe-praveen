'use client';

import Link from 'next/link';
import Button from '../ui/Button';

export default function QuotationResult({ setPage, bookUrl, result }) {
  return (
    <div className="w-full p-8 min-h-[80vh] flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <h1 className="text-lg font-semibold text-gray-200">
          Your estimate quotation for project requirement is:
        </h1>
        <h1 className="text-6xl text-cyan-200 font-bold">
          ${result.totalCost}
        </h1>
        <p className="text-sm text-gray-300">
          Approximate Duration: {result.totalTime} hours
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-sm text-gray-300">Start with the project?</p>
        <div className="flex lg:flex-row md:flex-row flex-col gap-4">
          <Link href={bookUrl ?? '/contact'}>
            <Button variant="filled" label={'Book a Call'} />
          </Link>
          <Button
            variant="outline"
            label={'Change Requirements'}
            onClick={() => setPage(0)}
          />
        </div>
      </div>
    </div>
  );
}
