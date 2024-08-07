import { TextReveal, SimpleTextReveal } from "@/components/helpers";
import { aboutPoints } from "./about-points";
import { useRef } from "react";
import { useInView } from "framer-motion";
import useCursorState from "@/store/useCursorState";

export const MobileTextSection = () => {
  const textContainerRef = useRef(null);
  const { setCursorState } = useCursorState();
  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <div className="flex flex-col xl:hidden mt-[32rem] lg:mt-[40rem] px-4">
      <p className="text-lg lg:text-xl">
        <TextReveal containerDelay={0.1} animationDelay={0.01}>
          Hey, I&apos;m Gourav! I&apos;m a frontend developer from India. I
          enjoy creating web projects that are both functional and aesthetically
          pleasing, with a focus on great user experience. In my downtime, I
          love watching anime and picking up new skills.
        </TextReveal>
      </p>

      <div>
        <h3
          ref={textContainerRef}
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="font-medium text-3xl mt-[4rem] text-center md:text-left font-sendflowers md:w-[11rem]"
        >
          <SimpleTextReveal delay={1}>My Experience</SimpleTextReveal>
        </h3>
        <ul className="flex flex-col justify-between min-h-[22rem] md:min-h-[20rem] lg:min-h-[16rem] leading-[1.3rem] mt-12 text-lg">
          {aboutPoints.map((point, i) => (
            <li key={i} className="mb-3 sm:mb-0">
              <TextReveal
                isContainerInView={isInView}
                offsetAmount={0.01}
                containerDelay={1.1}
                animationDelay={0.01}
              >
                {point}
              </TextReveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileTextSection;
