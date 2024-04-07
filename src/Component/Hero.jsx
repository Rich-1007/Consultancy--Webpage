import React from "react";

function Hero() {
  
  return (
    <div className="flex  flex-wrap">
      {cardDetails.map((item) => (
        <div className=" basis-full sm:basis-auto  p-6 m-3 h-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex justify-center items-center flex-col">
            <img className="w-14 h-14" src={item.src} alt="" />
            <p className="font-serif">{item.main_text}</p>
            <p className="font-extralight">{item.job_num}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
