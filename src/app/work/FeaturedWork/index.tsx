"use client";

import SectionHeading from "@/components/helpers/Heading";
import { Projects } from "./projects";
import Image from "next/image";
export const FeaturedWorkSection = () => {
  return (
    <section className="container relative mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mt-20">
      <SectionHeading id="featured-work-heading" className="">
        Featured Work
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 max-w-[120rem] mx-auto space-y-2 md:space-y-14 lg:space-y-0">
        {Projects.map((project) => (
          <div
            key={project.slNo}
            className="flex flex-col justify-between h-full  w-11/12 lg:w-11/12 mx-auto"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt="project-image"
                fill
                className="bg-cover rounded-xl opacity-80 shadow-xl"
              />
            </div>

            <div className="h-[1px] w-full bg-black mt-6 mb-2" />
            <h3 className="font-medium text-xl">{project.title}</h3>
            <div className="h-[1px] w-full bg-black mt-2 mb-4" />

            <p className="2xl:h-4 text-lg w-full">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
