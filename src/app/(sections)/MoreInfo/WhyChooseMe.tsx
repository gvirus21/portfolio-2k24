import { SimpleTextReveal } from "@/components/helpers";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyChooseMe = () => {
  const { setCursorState } = useCursorState();
  const textContainerRef = useRef(null);

  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <div ref={textContainerRef} className="w-full md:w-6/12 lg:w-4/12 xl:w-full 2xl:w-[30%] px-4 md:px-5 xl:px-0">
      <h3
        onMouseEnter={() => setCursorState("lg-hovered")}
        onMouseLeave={() => setCursorState("regular")}
        className="text-3xl lg:text-4xl 2xl:text-4xl mx-auto text-left font-medium"
      >
        <SimpleTextReveal delay={0.5}>Why Choose Me?</SimpleTextReveal>
      </h3>
      <div
        onMouseEnter={() => setCursorState("md-hovered")}
        onMouseLeave={() => setCursorState("regular")}
        className="flex flex-col w-full xl:w-9/12 2xl:w-full text-base sm:text-lg md:text-xl 2xl:text-base mt-10 lg:mt-14 2xl:mt-16 3xl:mt-20"
      >
        <TextReveal isContainerInView={isInView} animationDelay={0.02}>
          With years of frontend web development experience and numerous
          Freelance projects under my belt, I deliver exactly what clients need,
          often ahead of schedule. My work is pixel-perfect, and I&apos;m always
          learning new skills to stay ahead. I&apos;m committed,
          detail-oriented, and passionate about creating seamless user
          experiences.
        </TextReveal>

        <TextReveal
          isContainerInView={isInView}
          containerDelay={1}
          animationDelay={0.02}
          className="mt-4 sm:mt-6"
        >
          Let&apos;s build something Awesome together! :)
        </TextReveal>
      </div>
    </div>
  );
};

export default WhyChooseMe;
