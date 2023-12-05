'use client';
import Image from 'next/image';
import './ServiceCard.css'

const ServiceCard = ({ title, img, cardId }) => {
  const handleMove = () => {
    const elem = document.querySelector(`.shiny-${cardId}`);

    const readout = document.querySelector('p');

    elem.addEventListener('mousemove', (e) => {
      const { x, y } = elem.getBoundingClientRect();
      elem.style.setProperty('--x', e.clientX - x);
      elem.style.setProperty('--y', e.clientY - y);
    });
  };
  return (
    <div onMouseMove={handleMove} className={`serviceCard shiny-${cardId} shiny w-72 md:w-[30%] hover:shadow-sm hover:shadow-cyan-500 text-gray-300 hover:text-gray-100 transition-all duration-200 max-w-xs h-32 rounded-xl flex items-center justify-start relative border overflow-hidden border-gray-600`}>
      {img && (
        <Image
          src={`/assets/services/${img}`}
          className="absolute right-0 w-auto h-[80%]"
          width={0}
          height={0}
          alt="img"
        ></Image>
      )}

      <div className="w-[70%] h-full bg-[url('/assets/services/union.svg')] bg-cover relative">
        <h2 className="text-xl font-bold   absolute bottom-6 left-6">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ServiceCard;
