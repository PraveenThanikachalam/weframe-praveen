import Link from 'next/link';
import Button from './Button';
import './NudgeCard.css';

const NudgeCard = ({ title, label, url }) => {
  return (
    <div className="relative max-w-screen-xl md:w-full w-[80%]  lg:px-16 overflow-hidden px-10 py-10 lg:py-20 rounded-3xl text-center border-[1px] border-cyan-800 bg-gradient-to-r from-[#031313] to-[#051A1C] flex flex-col items-center gap-6 ">
      <div className="w-full md:w-[29rem] z-10">
        <h1 className="lg:text-5xl md:text-4xl text-xl gradient-text font-title-font  md:leading-10">
          {title}
        </h1>
      </div>
      <Link href={url ?? '/contact'} target="_blank">
        <Button label={label} />
      </Link>
      <div className="flair"></div>
    </div>
  );
};

export default NudgeCard;
