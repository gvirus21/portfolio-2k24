import { SimpleTextReveal } from "@/components/helpers";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const WhyChooseMeSection = () => {
  const { setCursorState } = useCursorState();
  const textContainerRef = useRef(null);

  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <div className="flex flex-col justify-center items-center h-[70vh] sm:h-[50vh] 3xl:h-[30vh] w-screen max-w-full mt-28 xs:mt-6 sm:mt-36 mb-20">
      <div ref={textContainerRef} className="w-5/6">
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="font-medium text-4xl xl:text-5xl font-sendflowers w-full text-center"
        >
          <SimpleTextReveal delay={0.5}>Why Choose Me?</SimpleTextReveal>
        </h3>
        <p
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="flex  flex-col text-lg sm:text-2xl sm:w-11/12 xl:w-[56rem] text-center mx-auto mt-10 sm:mt-20"
        >
          <TextReveal isContainerInView={isInView} animationDelay={0.02}>
            With years of frontend web development experience and numerous
            Freelance projects under my belt, I deliver exactly what clients
            need, often ahead of schedule. My work is pixel-perfect, and
            I&apos;m always learning new skills to stay ahead. I&apos;m
            committed, detail-oriented, and passionate about creating seamless
            user experiences. Let&apos;s build something amazing together!
          </TextReveal>
          <TextReveal
            isContainerInView={isInView}
            containerDelay={1}
            className="mt-4 inline-block"
          >
            :)
          </TextReveal>
        </p>
      </div>
    </div>
  );
};

export default WhyChooseMeSection;
