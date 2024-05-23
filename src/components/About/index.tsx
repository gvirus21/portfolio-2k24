import React from "react";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const AboutSection = ({ timeline }: Props) => {
  return (
    <section className="relative left-[50%] -translate-x-[50%] flex flex-col lg:flex-row justify-between min-h-[90vh] w-11/12 max-w-[140rem] mt-20 lg:mt-[14rem]">
      {/* <div className="absolute -top-60 left-[50%] -translate-x-[50%] h-[60rem] w-5/6 bg-slate-400 rounded-lg -z-30" /> */}
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl md:text-5xl lg:text-8xl ">About Me</h2>
        <div className="hidden lg:flex flex-col">
          <p className="w-[40rem] text-2xl mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div>
            <h3 className="font-medium text-4xl mt-[16rem]">My Experience: </h3>
            <ul className="flex flex-col justify-between h-[22rem] mt-16 text-lg w-[50rem] list-disc">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                quasi id cum corrupti nemo at ex ullam voluptatibus accusamus.
                Tenetur!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                quasi id cum.
              </li>
              <li>
                Amet consectetur adipisicing elit. Minus quasi id cum corrupti
                nemo.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                quasi id cum corrupti nemo at ex ullam voluptatibus accusamus.
                Tenetur!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                quasi id cum corrupti nemo at ex ullam voluptatibus accusamus.
                Tenetur!
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute top-20 lg:top-[50%] left-[50%] lg:left-auto -translate-x-[50%] lg:translate-x-auto lg:right-0 lg:-translate-y-[55%] aspect-[3/4] h-[26rem] lg:h-[45rem] max-w-full bg-white rounded-md lg:rounded-lg"></div>

      {/* mobile text seciton */}
      <div className="flex flex-col lg:hidden mt-[32rem] px-4">
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <h3 className="font-medium text-4xl mt-[5rem] text-center">
            My Experience{" "}
          </h3>
          <ul className="flex flex-col justify-between min-h-[22rem] mt-12 text-lg list-disc">
            <li className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              quasi id cum corrupti nemo at ex ullam voluptatibus accusamus.
              Tenetur!
            </li>
            <li className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              quasi id cum.
            </li>
            <li className="mb-3">
              Amet consectetur adipisicing elit. Minus quasi id cum corrupti
              nemo.
            </li>
            <li className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              quasi id cum corrupti nemo at ex ullam voluptatibus accusamus.
              Tenetur!
            </li>
            <li className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              quasi id cum corrupti nemo at ex ullam voluptatibus accusamus.
              Tenetur!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
