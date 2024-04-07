import React from "react";

function Hero() {
  const cardDetails = [
    {
      src: "src/assets/work-from-home.png",
      main_text: "Work From Home",
      job_num: "500 Active jobs",
    },
    {
      src: "src/assets/Accountant-rafiki.png",
      main_text: "Accountant",
      job_num: "4909 Active Jobs",
    },
    {
      src: "src/assets/Add to Cart-pana.png",
      main_text: "BPO / Customer care",

      job_num: "4332 Active Jobs",
    },
    {
      src: "src/assets/New entries-amico.png",
      main_text: "Data Entry / Back Office",
      job_num: "333 Active Jobs",
    },
    {
      src: "src/assets/Marketing-bro.png",

      main_text: "Sales / Marketing",
      job_num: "2335 Active Jobs",
    },
    {
      src: "src/assets/New entries-amico.png",
      main_text: "Receptionist / Front Office",
      job_num: "7673 Active Jobs",
    },
    {
      src: "src/assets/Hospital patient-cuate.png",
      main_text: "Hospitality Executives",
      job_num: "436 Active Jobs",
    },
    {
      src: "src/assets/Low code development-bro.png",
      main_text: "IT Software-Engineer",

      job_num: "2345 Active Jobs",
    },
    {
      src: "src/assets/Innovation-bro.png",
      main_text: "Mechanic",
      job_num: "987 Active Jobs",
    },
    {
      src: "src/assets/Welcome aboard-bro.png",
      main_text: "Receptionist / Front Office",
      job_num: "567 Active Jobs",
    },
    {
      src: "src/assets/Take Away-rafiki.png",
      main_text: "Delivery",
      job_num: "98 Active Jobs",
    },
    {
      src: "src/assets/Chef-bro.png",
      main_text: "Cook / Chef",
      job_num: "378 Active Jobs",
    },
  ];

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
