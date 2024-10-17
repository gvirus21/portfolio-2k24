"use client";

import SectionHeading from "@/components/helpers/Heading";
import { Projects } from "./projects";
import Image from "next/image";
export const FeaturedWorkSection = () => {
  return (
    <section className="container relative mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mt-20">
      <SectionHeading
        id="featured-work-heading"
        className="mr-"
      >
        Featured Work
      </SectionHeading>
      <div>
    {
      Projects.map((project) => (
        <div key={project.slNo} className="flex flex-col justify-between h-full w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 lg:mr-8 xl:mr-12 2xl:mr-16">
          <Image src={project.image} alt="project-image" fill className="bg-cover rounded-xl opacity-80 shadow-xl" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))
    }
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
