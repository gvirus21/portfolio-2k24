import React from "react";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const AboutSection = ({ timeline }: Props) => {
  return (
    <section className="relative left-[50%] -translate-x-[50%] flex justify-between h-[90vh] w-11/12 max-w-[140rem] mt-[14rem]">
      {/* <div className="absolute -top-60 left-[50%] -translate-x-[50%] h-[60rem] w-5/6 bg-slate-400 rounded-lg -z-30" /> */}
      <div className="flex flex-col">
        <h2 className="text-8xl">About Me</h2>
        <p className="w-[40rem] text-2xl mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div>
          <h3 className="font-medium text-4xl mt-[16rem]">My Experience: </h3>
          <ul className="flex flex-col justify-between h-[22rem] mt-16 text-lg w-[50rem] list-disc">
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi id cum corrupti nemo at ex ullam voluptatibus accusamus. Tenetur!</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi id cum.</li>
            <li>Amet consectetur adipisicing elit. Minus quasi id cum corrupti nemo.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi id cum corrupti nemo at ex ullam voluptatibus accusamus. Tenetur!</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi id cum corrupti nemo at ex ullam voluptatibus accusamus. Tenetur!</li>
          </ul>
        </div>
      </div>

      <div className="absolute top-[50%] right-0 -translate-y-[65%] h-[45rem] w-[40rem] bg-white rounded-lg"></div>
    </section>
  );
};

export default AboutSection;
