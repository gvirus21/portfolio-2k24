import React from "react";
import AnimatedText from "./AnimatedText";

const MainHeading = () => {
  return (
    <div className="flex flex-col justify-between items-start sm:min-h-[12rem] md:min-h-[16rem] 2xl:min-h-[18rem] text-5xl xs:text-[3.6rem] md:text-[4rem] xl:text-[4.5rem] 2xl:text-[5.5rem] font-medium tracking-[-0.025rem] leading-[4rem] md:leading-[4.5rem] capitalize">
      <h1 className="min-h-5 md:w-full pr-10 lg:pr-0">
        A{" "}
        <span className="font-catalunya text-[6.5rem] tracking-wider">
          Creative
        </span>{" "}
        Frontend
      </h1>
      <h1 className="min-h-5 pr-10 lg:pr-0 md:w-5/6 lg:w-full">
        Developer, with a passion
      </h1>
      <h1 className="min-h-5 pr-10 lg:pr-0 md:w-5/6 lg:w-full">
        for building on the web.
      </h1>

      {/* will review this animated-text component */}
      {/* <AnimatedText className="min-h-5 md:w-full pr-10 lg:pr-0">
        A <span className="font-quanta-grotesk">Creative</span> Frontend
      </AnimatedText>
      <AnimatedText className="min-h-5 pr-10 lg:pr-0 md:w-5/6 lg:w-full">
        Developer, with a passion
      </AnimatedText>
      <AnimatedText className="min-h-5 pr-10 lg:pr-0 md:w-5/6 lg:w-full">
        for building on the web.
      </AnimatedText> */}
    </div>
  );
};

export default MainHeading;
