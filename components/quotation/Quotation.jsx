'use client';
import SwitchButton from '../ui/SwitchButton';
import { useEffect, useState } from 'react';
import QuotationForm from './QuotationForm';
import NudgeCard from '../ui/NudgeCard';
import CompanyForm from './CompanyForm';
import QuotationResult from './QuotationResult';

export default function Quotation() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState();
  const [shift, setShift] = useState(false);
  const [quoteCost, setQuoteCost] = useState({ totalCost: 0, totalTime: 0 });
  const [companyFormSubmitted, setCompanyFormSubmitted] = useState(false);

  const fetchData = async () => {
    const section = shift ? 'headless_quote_page' : 'jamstack_quote_page';
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/${section}?fields=*, seo.*`,
        {
          headers: {
            Authorization: `Bearer U7yJWzq0QYFGpxnPSbXyZVqbailrMoqm`,
          },
          next: {
            revalidate: 60,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setData(data.data);
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [shift]);

  return (
    <>
      {page < 2 && (
        <div className="w-full lg:my-28 my-12 flex flex-col items-center gap-10 lg:gap-8 justify-center">
          <div className="flex flex-col items-center justify-center text-center lg:w-[60%] w-full gap-5">
            <h1 className="lg:text-5xl md:text-5xl text-3xl gradient-text font-bold font-title-font">
              {data?.heading_lines?.map((line, index) => (
                <p key={index}>
                  {line.point}
                  <br />
                </p>
              ))}
            </h1>
            <SwitchButton
              label1={'Jamstack Web Dev'}
              label2={'Headless Commerce'}
              setShift={setShift}
              shift={shift}
            />
          </div>

          {page === 0 && (
            <QuotationForm
              formData={data && data?.categories}
              note={data?.note}
              setPage={setPage}
              companyFormSubmitted={companyFormSubmitted}
              setQuoteCost={setQuoteCost}
              uiux_price={data?.uiux_price}
            />
          )}
          {page === 1 && (
            <CompanyForm
              setPage={setPage}
              setCompanyFormSubmitted={setCompanyFormSubmitted}
            />
          )}

          <div className="md:min-h-[60vh] w-screen p-6 md:mb-20  flex items-center justify-center">
            <NudgeCard
              title={data?.section1_heading}
              label={data?.section1_button_text}
              url={data?.section1_button_url}
            />
          </div>
        </div>
      )}
      {page === 2 && (
        <QuotationResult
          bookUrl={data?.section1_button_url}
          setPage={setPage}
          result={quoteCost}
        />
      )}
    </>
  );
}
