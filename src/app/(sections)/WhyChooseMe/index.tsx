import { SimpleTextReveal } from "@/components/helpers";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaPaintRoller } from "react-icons/fa6";
import { MdBuild } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

export const WhyChooseMeSection = () => {
  const { setCursorState } = useCursorState();
  const textContainerRef = useRef(null);

  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <div className="flex justify-between items-center h-[70vh] sm:h-[50vh] 3xl:h-[30vh] w-screen max-w-full mt-28 xs:mt-6 sm:mt-36 mb-20 px-20">
      <div ref={textContainerRef} className="w-3/12 px-5">
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="text-2xl xl:text-5xl mx-auto"
        >
          <SimpleTextReveal delay={0.5}>Why Choose Me?</SimpleTextReveal>
        </h3>
        <p
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="flex flex-col text-xl mt-5 sm:mt-20"
        >
          <TextReveal isContainerInView={isInView} animationDelay={0.02}>
            With years of frontend web development experience and numerous
            Freelance projects under my belt, I deliver exactly what clients
            need, often ahead of schedule. My work is pixel-perfect, and
            I&apos;m always learning new skills to stay ahead. I&apos;m
            committed, detail-oriented, and passionate about creating seamless
            user experiences.
          </TextReveal>

          <TextReveal
            isContainerInView={isInView}
            containerDelay={1}
            animationDelay={0.02}
            className="mt-6"
          >
            Let&apos;s build something Awesome together! :)
          </TextReveal>
        </p>
      </div>
      <div className="h-full w-8/12 mt-20 pr-10">
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="text-2xl xl:text-5xl mx-auto text-right"
        >
          <SimpleTextReveal delay={0.5}>My Work Process</SimpleTextReveal>
        </h3>
        <div className="flex justify-between items-center mt-20 bg-white/20 rounded-xl py-10 px-10 shadow-xl">
          <div className="">
            <div className="">
              <div className="flex justify-between items-center p-4 h-12 w-28 rounded-full bg-white/45">
                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-white">
                  <FaPaintRoller className="text-black h-3 w-3" />
                </div>
                <p> Step 1 </p>
              </div>
              <div className="pl-1 mt-6">
                <h3 className="text-3xl font-medium">Design the Needs</h3>
                <p className="w-[24rem] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis laboriosam molestias accusamus rem quam.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="flex justify-between items-center p-4 h-12 w-28 rounded-full bg-white/45">
                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-white">
                  <MdBuild className="text-black h-3 w-3" />
                </div>
                <p> Step 2 </p>
              </div>
              <div className="pl-1 mt-6">
                <h3 className="text-3xl font-medium">Develop The Solution</h3>
                <p className="w-[24rem] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis laboriosam molestias accusamus rem quam.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="flex justify-between items-center p-4 h-12 w-28 rounded-full bg-white/45">
                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-white">
                  <PiHandshake className="text-black h-3 w-3" />
                </div>
                <p> Step 3 </p>
              </div>
              <div className="pl-1 mt-6">
                <h3 className="text-3xl font-medium">Review & Ship</h3>
                <p className="w-[24rem] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis laboriosam molestias accusamus rem quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMeSection;
