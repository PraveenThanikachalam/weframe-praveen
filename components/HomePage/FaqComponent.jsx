import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqComponent = ({ faq }) => {
  return (
    <div className="faq w-full flex my-20 items-center text-center justify-center flex-col">
      <div>
        <h1 className="text-4xl font-bold text-white">{faq?.faq_heading}</h1>
      </div>
      <div className="lg:w-[70%] w-[80%] mt-16">
        <Accordion type="single" collapsible className="w-full text-[#ebebeb]">
          {faq?.faq_list?.map((item, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                className="borderGrd px-4 mt-3"
                key={index}
              >
                <AccordionTrigger className="hover:no-underline">
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#999999] text-left">
                  {item?.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqComponent;
