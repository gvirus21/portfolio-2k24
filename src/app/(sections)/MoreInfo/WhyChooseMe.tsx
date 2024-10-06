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
    <div
      ref={textContainerRef}
      className="min-h-screen w-full md:w-6/12 lg:w-4/12 xl:w-full 2xl:w-[30%] px-4 md:px-5 xl:px-0"
    >
      <h3
        onMouseEnter={() => setCursorState("lg-hovered")}
        onMouseLeave={() => setCursorState("regular")}
        className="text-3xl lg:text-4xl xl:text-7xl 2xl:text-4xl mx-auto text-center font-semibold tracking-wide"
      >
        <SimpleTextReveal delay={0.5}>Why Choose Me?</SimpleTextReveal>
      </h3>
      <div
        onMouseEnter={() => setCursorState("md-hovered")}
        onMouseLeave={() => setCursorState("regular")}
        className="flex flex-col w-7/12 text-2xl capitalize mx-auto mt-10 lg:mt-16 2xl:mt-16 3xl:mt-20 text-center tracking-wider"
      >
        <div className="text-justify">
          <TextReveal
            isContainerInView={isInView}
            animationDelay={0.02}
            className=""
          >
            As a Solo Web Developer, I have a unique perspective on what my
            clients need from their buisness, and through my website, i help
            them achieve their goals, often Big agencies can&apos;t do.
          </TextReveal>
        </div>

        <div className="text-left mt-5">
          <TextReveal isContainerInView={isInView} animationDelay={0.02}>
            As a Developer, My top most priority is to devliver a High Quality
            website, that not just looks good but also satisfies the
            client&apos;s needs.
          </TextReveal>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-left capitalize">
            Some of My Happy Clients
          </h3>
          <div className="flex justify-between items-center mt-10 w-full mx-auto">
            <div className="h-20 w-40 bg-gray-300 rounded-lg"></div>
            <div className="h-20 w-40 bg-gray-300 rounded-lg"></div>
            <div className="h-20 w-40 bg-gray-300 rounded-lg"></div>
            <div className="h-20 w-40 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
