'use client';
import SwitchButton from '../ui/SwitchButton';
import { useState } from 'react';
import QuotationForm from './QuotationForm';
import NudgeCard from '../ui/NudgeCard';
import CompanyForm from './CompanyForm';
import QuotationResult from './QuotationResult';

export default function Quotation({ quotationData }) {
  const [page, setPage] = useState(0);
  const [type, setType] = useState([quotationData.quote[0] ?? []]);
  const [shift, setShift] = useState(false);
  const [quoteCost, setQuoteCost] = useState(0);

  return (
    <>
      {page < 2 && (
        <div className="w-full lg:my-28 my-12 flex flex-col items-center gap-10 lg:gap-8 justify-center">
          <div className="flex flex-col items-center justify-center text-center lg:w-[60%] w-full gap-5">
            <h1 className="lg:text-5xl md:text-5xl text-3xl gradient-text font-bold font-title-font">
              {quotationData?.heading_lines?.map((line, index) => {
                return (
                  <p key={index}>
                    {line.point}
                    <br />
                  </p>
                );
              })}
            </h1>
            <SwitchButton
              label1={quotationData?.quote[0]?.quotes_id?.heading ?? ''}
              label2={quotationData?.quote[1]?.quotes_id?.heading ?? ''}
              setShift={setShift}
              shift={shift}
            />
          </div>

          {page === 0 && (
            <QuotationForm
              formData={{
                tags: shift
                  ? quotationData?.quote[1]?.quotes_id?.categories
                  : quotationData?.quote[0]?.quotes_id?.categories,
              }}
              setPage={setPage}
            />
          )}
          {page === 1 && <CompanyForm setPage={setPage} />}

          <div className="md:min-h-[60vh] w-screen p-6 md:mb-20  flex items-center justify-center">
            <NudgeCard
              title={quotationData?.section1_heading}
              label={quotationData?.section1_button_text}
              url={quotationData?.section1_button_url}
            />
          </div>
        </div>
      )}
      {page === 2 && (
        <QuotationResult
          bookUrl={quotationData?.section1_button_url}
          setPage={setPage}
        />
      )}
    </>
  );
}
