export default function BackLightEffect() {
  return (
    <div className="flex flex-col overflow-x-hidden md:overflow-visible  justify-center items-center">
      <div className="relative w-screen md:w-[95vw] flex justify-center items-center">
        <div className="absolute top-0 w-[50%] h-2/6 rounded-[50%] blur-[200px] bg-[#25edfffc] mix-blend-lighten"></div>
        <div className="w-52 h-52 sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] block z-0 blur-[8px] -scale-y-100 rotate-90 bottomLightBg overflow-x-hidden rounded-tr-full"></div>
        <div className="w-52 h-52 sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] block z-0 blur-[8px] rotate-90 bottomLightBg overflow-x-hidden rounded-tr-full"></div>
        {/* <div className="bg-[#28b0bc00] h-full w-full absolute -top-1/2 md:-top-3/4 blur-sm   backdrop-blur-sm md:backdrop-blur-[20px] overflow-hidden"></div> */}
      </div>
      <div className="w-44 sm:w-[300px] lg:w-[460px] glow md:h-[2.2px] h-[1px] blur-[0.9px] bg-[#96f6ff] absolute   rounded-full"></div>
    </div>
  );
}
