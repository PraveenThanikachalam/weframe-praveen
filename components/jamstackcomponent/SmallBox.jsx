import SvgRenderer from '@/lib/svg_renderer';

const SmallBox = ({ label, icon }) => {
  return (
    <div className="lg:w-56 md:w-55 w-full border-gray-600 text-gray-400 hover:text-white hover:shadow-sm hover:shadow-white transition-all duration-200 cursor-default border rounded-xl story-card-grd flex flex-col items-center justify-center gap-3 p-6">
      <SvgRenderer svgText={icon}/>
      <p className="font-fira-code text-sm ">{label}</p>
    </div>
  );
};

export default SmallBox;
