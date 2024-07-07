import React from "react";

export const WhyChooseMeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] sm:h-[50vh] 3xl:h-[30vh] w-screen max-w-full mt-32 mb-20">
      <div className="w-5/6">
        <h3 className="font-medium text-4xl xl:text-5xl font-sendflowers w-full text-center">
          Why Choose Me?
        </h3>
        <p className="text-lg sm:text-2xl sm:w-11/12 xl:w-[56rem] text-center mx-auto mt-10 sm:mt-20">
          With years of frontend web development experience and numerous
          Freelance projects under my belt, I deliver exactly what clients need,
          often ahead of schedule. My work is pixel-perfect, and I&apos;m always
          learning new skills to stay ahead. I&apos;m committed,
          detail-oriented, and passionate about creating seamless user
          experiences. Let&apos;s build something amazing together! <br />
          <span className="mt-4 inline-block">:)</span>
        </p>
      </div>
    </div>
  );
};

export default WhyChooseMeSection;
