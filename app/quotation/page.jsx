import Quotation from '@/components/quotation/Quotation';
import getQuotationData from '@/data/getQuotationData';

const Quote = async () => {
  const data = await getQuotationData();

  return (
    <main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
      <Quotation quotationData={data} />
    </main>
  );
};

export default Quote;
