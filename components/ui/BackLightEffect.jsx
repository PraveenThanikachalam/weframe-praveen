export default function BackLightEffect(){
    return(
        <div className="relative w-[95vw] flex justify-center items-center">
            <div className="absolute top-0 w-1/2 h-2/6 rounded-[50%] blur-[300px] bg-[#16838D] mix-blend-screen"></div>
            <div className=' w-52 h-52 md:w-[500px] md:h-[500px] block -scale-y-100 rotate-90 bottomLightBg overflow-x-hidden'>
            </div>
            <div className=' w-52 h-52 md:w-[500px] md:h-[500px] block rotate-90 bottomLightBg overflow-x-hidden'>
            </div>
            <div className="bg-[#020C0D02] h-full w-full absolute -top-1/2 blur-3xl backdrop-blur-[20px] overflow-hidden"></div>
        </div>
    );
}