import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import profileImage from "/public/assets/gourav-kumar.webp";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const AboutSection = ({ timeline }: Props) => {
  return (
    <Element name="about-section">
      <section
        className="relative left-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-between min-h-[90vh] lg:min-h-[70vh] 
      2xl:min-h-[40vh] w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem] mt-40 lg:mt-[8rem] 2xl:mt-[14rem]"
      >
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:mb-10 lg:mb-0">
              About Me
            </h2>
            <p className="w-[40rem] hidden lg:block lg:w-[26rem] xl:w-[40rem] lg:text-xl 2xl:text-2xl lg:mt-8 xl:mt-12 2xl:mt-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Profile photo */}
          <div className="absolute top-20 md:top-28 lg:top-1/2 left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-0 lg:-translate-y-[45%] 2xl:-translate-y-[40%] h-[26rem] lg:h-[32rem] xl:h-[40rem] 2xl:h-[50rem] max-w-full aspect-[3/4] bg-white rounded-md lg:rounded-lg">
            <Image src={profileImage} fill alt="profile-image"  className="object-cover"/>
          </div>

          {/* Desktop text seciton */}
          <div className="hidden lg:flex flex-col">
            <div className="mt-20 xl:mt-[5rem] 2xl:mt-[16rem]">
              <h3 className="font-medium text-4xl">My Experience: </h3>
              <ul className="flex flex-col justify-between min-h-[18rem] xl:min-h-[22rem] w-[26rem] xl:w-[35rem] 2xl:w-[44rem] mt-10 xl:mt-12 2xl:mt-16 text-lg 2xl:text-xl font-thin list-disc">
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum corrupti nemo at ex ullam voluptatibus
                  accusamus. Tenetur!
                </li>
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum.
                </li>
                <li className="mb-3">
                  Amet consectetur adipisicing elit. Minus quasi id cum corrupti
                  nemo.
                </li>
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum corrupti nemo at ex ullam voluptatibus
                  accusamus. Tenetur!
                </li>
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum corrupti nemo at ex ullam voluptatibus
                  accusamus. Tenetur!
                </li>
              </ul>
            </div>
          </div>

          {/* mobile text seciton */}
          <div className="flex flex-col lg:hidden mt-[32rem] px-4">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <h3 className="font-medium text-3xl mt-[5rem] text-center md:text-left">
                My Experience{" "}
              </h3>
              <ul className="flex flex-col justify-between min-h-[22rem] mt-12 text-lg list-disc">
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum corrupti nemo at ex ullam voluptatibus
                  accusamus. Tenetur!
                </li>
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum.
                </li>
                <li className="mb-3">
                  Amet consectetur adipisicing elit. Minus quasi id cum corrupti
                  nemo.
                </li>
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum corrupti nemo at ex ullam voluptatibus
                  accusamus. Tenetur!
                </li>
                <li className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus quasi id cum corrupti nemo at ex ullam voluptatibus
                  accusamus. Tenetur!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
