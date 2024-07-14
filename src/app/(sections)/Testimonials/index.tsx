import { useState, useRef } from "react";
import { SimpleTextReveal } from "@/components/helpers";
import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import { motion, useInView } from "framer-motion";
import useCursorState from "@/store/useCursorState";

const items = [
  // {
  //   quote: "hello",
  //   name: "Christophe Vauclair",
  //   title: "CTO, Co-Founder | Playgrounds Analytics Inc.",
  //   profileUrl: "https://www.linkedin.com/in/christophe-vauclair-825286161/",
  // },
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
    if (typeof window !== "undefined" && window.innerWidth > 1280) {
      return "large";
    } else {
      return "small";
    }
  };

  const [screenSize] = useState<"small" | "large">(getInitialScreenSize);
  const containerRef = useRef(null);

  const inViewAmount = screenSize === "large" ? 0.8 : 0.3;

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
