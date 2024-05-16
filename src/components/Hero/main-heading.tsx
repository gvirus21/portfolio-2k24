import React from "react";
import AnimatedText from "./AnimatedText";

const MainHeading = () => {
  return (
    <div className="flex flex-col justify-between items-start sm:min-h-[16rem] md:min-h-[10rem] xl:h-[22rem] text-5xl -xs:text-[3.6rem] sm:text-[5rem] md:text-[5rem] xl:text-[5rem] 2xl:text-[6.2rem] font-medium tracking-[-0.025rem] capitalize leading-[4rem] sm:leading-[5.3rem] md:leading-[5.5rem]">
      <AnimatedText className="min-h-5 sm:min-h-[12rem] md:min-h-[12rem] xl:min-h-[4rem] pr-10 lg:pr-0 md:w-4/6 xl:w-full">
        A <span className="font-quanta-grotesk">Creative</span> Frontend
      </AnimatedText>
      <AnimatedText className="min-h-5 sm:min-h-[12rem] md:min-h-[12rem] xl:min-h-[4rem] pr-10 lg:pr-0 md:w-5/6 xl:w-full">
        Developer, with a passion
      </AnimatedText>
      <AnimatedText className="min-h-5 sm:min-h-[12rem] md:min-h-[12rem] xl:min-h-[4rem] pr-10 lg:pr-0 md:w-5/6 xl:w-full">
        for building on the web.
      </AnimatedText>
    </div>
  );
};

export default MainHeading;
