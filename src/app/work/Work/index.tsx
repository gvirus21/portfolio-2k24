"use client";

import { Element } from "react-scroll";
import SectionHeading from "@/components/helpers/Heading";
import { WORK_DATA } from "./work-data";
import Image from "next/image";

export const WorkSection = () => {
  return (
    <Element name="work-section" className="relative">
      <section
        id="work-section"
        className="min-h-screen max-w-[120rem] pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 3xl:pt-28 mx-auto"
      >
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
          <SectionHeading id="work-heading">My Work</SectionHeading>
          <div className="mx-auto space-y-10 md:space-y-16 mt-12 lg:mt-16 xl:mt-20 2xl:mt-24">
            {WORK_DATA.map((work, index) => (
              <div
                key={index}
                className={`flex flex-col h-full w-full xl:w-11/12 glassmorphism shadow-2xl rounded-xl p-6 md:p-10 lg:p-12 2xl:p-16 mx-auto ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div>
                  <div className="relative aspect-[5/3] lg:w-[26rem] xl:w-[30rem] 2xl:w-[34rem] 3xl:w-[40rem]">
                    <Image
                      src={work.image}
                      alt="work-image"
                      fill
                      className="bg-cover rounded-xl opacity-80 shadow-xl"
                      style={{ aspectRatio: 5 / 3 }}
                    />
                  </div>
                </div>
                {/* Content */}
                <div
                  className={`space-y-6 mt-7 md:mt-8 lg:mt-0 ${
                    index % 2 === 0 ? "lg:ml-20 " : "lg:mr-0"
                  }`}
                >
                  <div className="space-y-3 2xl:space-y-4">
                    <h3 className="text-3xl font-medium sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl">
                      {work.title}
                    </h3>
                    <h4 className="text-xl font-medium sm:text-xl md:text-2xl xl:text-3xl">
                      {work.jobTitle}
                    </h4>
                  </div>
                  <div>
                    {work.description.map((message, i) => (
                      <p
                        key={i}
                        className="text-base my-3 xl:my-4 w-full lg:w-[90%] xl:w-full 2xl:w-[80%] sm:text-sm md:text-base"
                      >
                        {message}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default WorkSection;
