import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import React from "react";

const items = [
  {
    quote: "hello",
    name: "Christophe Vauclair",
    title: "CTO, Co-Founder | Playgrounds Analytics Inc.",
    profileUrl: "https://www.linkedin.com/in/christophe-vauclair-825286161/",
  },
  {
    quote: "hello",
    name: "Jephthah (Tachi) Akene",
    title: "CEO, Co-Founder | Playgrounds Analytics Inc.",
    profileUrl: "https://www.linkedin.com/in/akene/",
  },
  {
    quote: "hello",
    name: "Garance Buricatu",
    title: "Cloud / Full Stack Developer at Playgrounds Analytics",
    profileUrl: "https://www.linkedin.com/in/garance-buricatu-9a6a50147/",
  },
  {
    quote:
      "I've had the pleasure of working with Gourav, and I can confidently say he's exceptional with frontend technologies. His skills in crafting animations and minimalist designs are impressive. Gourav's attention to detail ensures aesthetically pleasing interfaces and a stable, high-quality codebase. I highly recommend him for any project needing top-notch frontend skills and a keen eye for design.",
    name: "Suvendu sekhar Sahoo",
    title: "Senior Backend Engineer, VISA",
    profileUrl: "https://www.linkedin.com/in/suvendu-sekhar-sahoo/",
  },
  {
    quote:
      "Gourav is quick to pick things up, easy to work with, and a great engineer.",
    name: "active-glacier-instinct",
    title: "Frontend Developer, BanklessDAO",
    profileUrl: "https://x.com/ActivateGlacier",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[50vh] w-screen max-w-full">
      <h2 className="font-medium text-5xl font-sendflowers w-11/12 text-left">
        Testimonials
      </h2>
      <div className="w-full lg:w-11/12 mt-10 sm:mt-20">
        <InfiniteMovingCards
          className="w-screen max-w-full"
          items={items}
          direction="left"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
