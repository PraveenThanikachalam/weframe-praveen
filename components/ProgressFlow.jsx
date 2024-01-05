import ProgressFlowCard from './ui/progressFlowCard';

const ProgressFlow = ({ title, arr }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <h1 className="lg:text-5xl md:text-5xl text-4xl  font-bold text-white font-title-font">
        {title}{' '}
      </h1>

      <div class={`  mx-auto max-w-screen-xl h-full`}>
        <div class="relative wrap overflow-hidden p-2 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 hidden md:block border-gray-700 h-full border"
            style={{ left: '50%' }}
          ></div>

          {arr?.map((item, index) => (
             <ProgressFlowCard
              key={index}
              index={index}
              title={item.label}
              desc={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressFlow;
