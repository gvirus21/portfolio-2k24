import { useState, useRef } from "react";
import { SimpleTextReveal } from "@/components/helpers";
import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import { motion, useInView } from "framer-motion";
import useCursorState from "@/store/useCursorState";

const items = [
  {
    quote:
      "Gourav joined our team in early 2023 as our first and only frontend developer and I had the pleasure of working closely with him over the course of more than a year. During his time at Playgrounds, Gourav was responsible for developing and maintaining our entire frontend, from our landing page to our many products' interfaces, a job he performed admirably well. His deep understanding of the frontend stack was critical in making our ideas become reality. Working for a startup is not always easy, but as his direct supervisor, I was constantly impressed by his ability to adapt and shift gears as our priorities changed and products were dropped and new projects started. His quick thinking and ability to perform under pressure and deliver in time kept us competitive and reactive in the ever changing tech market. Most importantly, his upbeat attitude and enthusiasm kept the team atmosphere positive even when times got tough.Whether it's a large project with millions of lines of code, or a prototype to become first on the market, I wholeheartedly recommend Gourav for any frontend software development role. ",
    name: "Christophe Vauclair",
    title: "CTO, Co-Founder | Playgrounds Analytics Inc.",
    profileUrl: "https://www.linkedin.com/in/christophe-vauclair-825286161/",
  },
  // {
  //   quote: "hello",
  //   name: "Jephthah (Tachi) Akene",
  //   title: "CEO, Co-Founder | Playgrounds Analytics Inc.",
  //   profileUrl: "https://www.linkedin.com/in/akene/",
  // },
  // {
  //   quote: "hello",
  //   name: "Garance Buricatu",
  //   title: "Cloud / Full Stack Developer at Playgrounds Analytics",
  //   profileUrl: "https://www.linkedin.com/in/garance-buricatu-9a6a50147/",
  // },
  {
    quote:
      "I have had the pleasure of working with Gourav, and I can confidently say he is exceptional with frontend technologies. His expertise in crafting animations and creating minimalist designs is truly impressive. Gourav's attention to detail ensures not only aesthetically pleasing interfaces but also a stable and high-quality codebase. His commitment to maintaining code quality throughout the development process is admirable. I highly recommend Gourav for any project requiring top-notch frontend skills and a keen eye for design.",
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

const containerVariants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const TestimonialSection = () => {
  const getInitialScreenSize = () => {
    if (typeof window !== "undefined" && window.innerWidth > 1536) {
      return "xl";
    } else if (typeof window !== "undefined" && window.innerWidth > 1280) {
      return "large";
    } else {
      return "small";
    }
  };

  const [screenSize] = useState<"small" | "large" | "xl">(getInitialScreenSize);
  const containerRef = useRef(null);

  let inViewAmount = 0;

  if (screenSize === "xl") {
    inViewAmount = 0.8
  } else if (screenSize === "large") {
    inViewAmount = 0.5
  } else if (screenSize === "small") {
    inViewAmount = 0.3
  }

  const isInView = useInView(containerRef, {
    amount: inViewAmount,
    once: true,
  });
  const { setCursorState } = useCursorState();

  return (
    <section className="flex flex-col justify-center items-center min-h-[50vh] w-screen max-w-full mt-[5rem] sm:mt-[12rem] 3xl:mt-40">
      <div className="w-10/12">
        <h2
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="font-medium text-5xl font-sendflowers text-left w-[14rem]"
        >
          <SimpleTextReveal delay={0.5}>Testimonials</SimpleTextReveal>
        </h2>
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "hidden"}
          className="w-full lg:w-11/12 mt-10 sm:mt-20"
        >
          <InfiniteMovingCards
            className="w-screen max-w-full"
            items={items}
            direction="left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
