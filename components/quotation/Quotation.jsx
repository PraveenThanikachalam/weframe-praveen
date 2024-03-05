'use client';
import { useEffect, useState } from 'react';
import QuotationForm from './QuotationForm';
import NudgeCard from '../ui/NudgeCard';
import CompanyForm from './CompanyForm';
import QuotationResult from './QuotationResult';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Quotation({ pageData, headlessSlug,jamstackSlug }) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(pageData);
  const [quoteCost, setQuoteCost] = useState({ totalCost: 0, totalTime: 0 });
  const [companyFormSubmitted, setCompanyFormSubmitted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [shift, setShift] = useState(
    pathname === `/calculator/${headlessSlug}` ? true : false
  );

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

  // console.log(data)


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
            
          {/* //switch button */}
            <div className="rounded-2xl  h-14 mt-4 overflow-hidden flex relative items-center justify-center border-[1px] border-white shadow-sm shadow-white">
              <div
                className={`w-[50%] h-full absolute right-0 slide z-10 bg-white ${
                  shift ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200`}
              ></div>
              <div
                onClick={() => {
                  setShift(!shift);
                  router.push(`/calculator/${jamstackSlug}`)
                }}
                className={`flex items-center z-20 justify-center font-semibold cursor-pointer shadow transition-all duration-500  lg:text-md text-sm lg:h-full h-14 px-10 py-2 rounded-l-xl ${
                  shift ? 'text-white' : 'text-black'
                } `}
              >
                Jamstack Development
              </div>
              <div
                onClick={() => {
                  setShift(!shift);
                  router.push(`/calculator/${headlessSlug}`)
                }}
                className={`flex items-center z-20 justify-center font-semibold transition-all duration-500 cursor-pointer lg:text-md text-sm px-10 py-2 lg:h-full h-14 rounded-r-xl ${
                  shift ? 'text-black' : 'text-white'
                } `}
              >
                Headless Commerce
              </div>
            </div>
          </div>

          {page === 0 && (
            <QuotationForm
              formData={data && data?.categories}
              note={data?.note}
              setPage={setPage}
              companyFormSubmitted={companyFormSubmitted}
              setQuoteCost={setQuoteCost}
              uiux_price={data?.uiux_price}
              ui_ux_duration={data?.ui_ux_duration}
              headlessSlug={headlessSlug}
              minimum_pages={data?.minimum_pages}
              per_page_price={data?.per_page_price}
              per_page_duration={data?.per_page_duration}
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
