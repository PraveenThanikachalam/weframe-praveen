import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const arr = [
  {
    id: 1,
    title: 'What is Headless Commerce and Jamstack Development?',
    desc: '  Jamstack (JavaScript, APIs, and Markup) is a web development architecture that emphasizes the separation of content from presentation. It promotes faster loading times, improved security, and scalability by relying on APIs and pre-rendering content. At our agency, we specialize in combining the power of headless commerce and Jamstack development to create high-performance, flexible, and scalable e-commerce solutions for our clients.',
  },
  {
    id: 2,
    title:
      '   What are the Benefits of Headless Commerce and Jamstack Development?',
    desc: '  Jamstack (JavaScript, APIs, and Markup) is a web development architecture that emphasizes the separation of content from presentation. It promotes faster loading times, improved security, and scalability by relying on APIs and pre-rendering content. At our agency, we specialize in combining the power of headless commerce and Jamstack development to create high-performance, flexible, and scalable e-commerce solutions for our clients.',
  },
  {
    id: 3,
    title:
      'Can I Migrate my Existing E-Commerce Platform to a Headless Commerce Solution?',
    desc: '  Jamstack (JavaScript, APIs, and Markup) is a web development architecture that emphasizes the separation of content from presentation. It promotes faster loading times, improved security, and scalability by relying on APIs and pre-rendering content. At our agency, we specialize in combining the power of headless commerce and Jamstack development to create high-performance, flexible, and scalable e-commerce solutions for our clients.',
  },
  {
    id: 4,
    title:
      ' How Do You Ensure Mobile Responsiveness in Headless Commerce Solution?',
    desc: '  Jamstack (JavaScript, APIs, and Markup) is a web development architecture that emphasizes the separation of content from presentation. It promotes faster loading times, improved security, and scalability by relying on APIs and pre-rendering content. At our agency, we specialize in combining the power of headless commerce and Jamstack development to create high-performance, flexible, and scalable e-commerce solutions for our clients.',
  },
  {
    id: 5,
    title:
      ' Can I Integrate Third-Party Services and APIs with a Headless Commerce System?',
    desc: '  Jamstack (JavaScript, APIs, and Markup) is a web development architecture that emphasizes the separation of content from presentation. It promotes faster loading times, improved security, and scalability by relying on APIs and pre-rendering content. At our agency, we specialize in combining the power of headless commerce and Jamstack development to create high-performance, flexible, and scalable e-commerce solutions for our clients.',
  },
  {
    id: 6,
    title: 'How Do You Ensure the Security of Headless Commerce Solution?',
    desc: '  Jamstack (JavaScript, APIs, and Markup) is a web development architecture that emphasizes the separation of content from presentation. It promotes faster loading times, improved security, and scalability by relying on APIs and pre-rendering content. At our agency, we specialize in combining the power of headless commerce and Jamstack development to create high-performance, flexible, and scalable e-commerce solutions for our clients.',
  },
];
const FaqComponent = () => {
  return (
    <div className="faq w-full flex my-20 items-center text-center justify-center flex-col">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Got questions? <br /> We got answers
        </h1>
      </div>
      <div className="lg:w-[70%] w-[80%] mt-16">
        <Accordion type="single" collapsible className="w-full text-[#ebebeb]">
          {arr.map((item, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                className="borderGrd px-4 mt-3"
                key={item.id}
              >
                <AccordionTrigger className="hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#999999] text-left">
                  {item.desc}
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
