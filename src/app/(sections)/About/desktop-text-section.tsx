import { TextReveal, SimpleTextReveal } from "@/components/helpers";
import { aboutPoints } from "./about-points";
import useCursorState from "@/store/useCursorState";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const DesktopTextSection = () => {
  const textContainerRef = useRef(null);
  const { setCursorState } = useCursorState();
  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <div className="hidden xl:flex flex-col -mt-10">
      <div
        ref={textContainerRef}
        className="mt-20 xl:mt-[5rem] 2xl:mt-[14rem] 3xl:mt-[12rem]"
      >
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="xl:text-4xl 2xl:text-5xl xl:w-[14rem] 3xl:w-full"
        >
          <SimpleTextReveal delay={1}>My Experience</SimpleTextReveal>
        </h3>
        <ul className="flex flex-col justify-between min-h-[18rem] xl:min-h-[22rem] w-[26rem] xl:w-[35rem] 2xl:w-[44rem] 3xl:w-[48rem] mt-10 xl:mt-8 2xl:mt-16 text-xl 2xl:text-xl tracking-wider">
          {aboutPoints.map((point, i) => (
            <li
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              key={i}
              className="capitalize xl:my-2 2xl:my-3 leading-6"
            >
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

export default DesktopTextSection;
