"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SimpleTextReveal, TextReveal } from "@/components/helpers";
import { WORK_DATA } from "./work-data";
import useCursorState from "@/store/useCursorState";
import Link from "next/link";

const textAnimation = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
  },
};

const imageVariants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const DesktopVersion = () => {
  const [scrolling, setScrolling] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);

  const imageContainerRef = useRef(null);
  const innerContainer = useRef(null);

  const { setCursorState, setCursorText } = useCursorState();

  const isInView = useInView(imageContainerRef, { amount: 0.4, once: true });

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;
      const workSection = document.getElementById("work-section");
      const workSectionScrollY = workSection?.offsetTop || 0; // scroll value from the work section
      const workSectionViewportHeight = workSection?.offsetHeight || 0; // height of the visible work section

      if (workSectionScrollY && workSectionViewportHeight) {
        setScrolling(true);
        let newIndex = workIndex;

        const thresholdHeight = workSectionViewportHeight / 2;

        const firstThreshold = thresholdHeight;
        const secondThreshold = thresholdHeight * 2;
        const thirdThreshold = thresholdHeight * 3;

        if (workSectionScrollY >= thirdThreshold) {
          setWorkIndex(3);
        } else if (workSectionScrollY >= secondThreshold) {
          setWorkIndex(2);
        } else if (workSectionScrollY >= firstThreshold) {
          setWorkIndex(1);
        } else if (workSectionScrollY < firstThreshold) {
          setWorkIndex(0);
        }

        if (newIndex !== workIndex) {
          const newScrollY = workSectionScrollY + newIndex * thresholdHeight;
          window.scrollTo({
            top: newScrollY,
            behavior: "smooth",
          });

          setTimeout(() => {
            setScrolling(false);
          }, 500); // Adjust timeout duration to match the smooth scroll behavior
        } else {
          setScrolling(false);
        }
      }
    };

    const workSection = document.getElementById("work-section");

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 1, // Trigger as soon as the element touches the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      });
    }, options);

    if (workSection) {
      observer.observe(workSection);
    }

    return () => {
      if (workSection) {
        observer.unobserve(workSection);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling, workIndex]);

  return (
    <div className="relative hidden xl:flex flex-row justify-between min-h-[53rem] xl:min-h-0 xl:h-[40rem] mt-32 mx-auto w-10/12 xl:w-full">
      <div className="flex flex-col h-[50rem] xl:h-[40rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={workIndex}
            variants={textAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[40rem] 2xl:w-full"
          >
            <WorkTitle workIndex={workIndex} />
            <WorkJobTitle workIndex={workIndex} />
          </motion.div>
        </AnimatePresence>

        {/* image container */}
        <motion.div
          ref={imageContainerRef}
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="xl:absolute xl:top-[12%] 2xl:top-14 3xl:top-0 xl:right-0 h-[12rem] lg:min-h-[24rem] 2xl:h-[28rem] 3xl:h-[40rem] aspect-[14/9] bg-white/50 my-10 mx-auto overflow-hidden rounded-3xl"
        >
          <motion.div
            ref={innerContainer}
            style={{
              top: workIndex * -100 + "%",
              transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            className="relative 3xl:h-[120rem]"
          >
            <Link
              href={WORK_DATA[0].website}
              onMouseEnter={() => {
                setCursorState("md-hovered");
                setCursorText("visit website");
              }}
              onMouseLeave={() => {
                setCursorState("regular");
                setCursorText("");
              }}
              className="flex justify-center items-center lg:h-[24rem] 2xl:h-[28rem] 3xl:h-[40rem]  bg-slate-800"
            >
              <Image
                className="w-5/6 aspect-video"
                src={WORK_DATA[0].image}
                height={700}
                width={800}
                alt="work-image"
              />
            </Link>
            <Link
              href={WORK_DATA[1].website}
              onMouseEnter={() => {
                setCursorState("md-hovered");
                setCursorText("visit website");
              }}
              onMouseLeave={() => {
                setCursorState("regular");
                setCursorText("");
              }}
              className="flex justify-center items-center lg:h-[24rem] 2xl:h-[28rem] 3xl:h-[40rem] w-full bg-red-950"
            >
              <Image
                className="w-5/6 aspect-video"
                src={WORK_DATA[1].image}
                height={700}
                width={800}
                alt="work-image"
              />
            </Link>
            <Link
              href={WORK_DATA[2].website}
              onMouseEnter={() => {
                setCursorState("md-hovered");
                setCursorText("visit website");
              }}
              onMouseLeave={() => {
                setCursorState("regular");
                setCursorText("");
              }}
              className="flex justify-center items-center lg:h-[24rem] 2xl:h-[28rem] 3xl:h-[40rem] w-full bg-black"
            >
              <Image
                className="w-5/6 aspect-video"
                src={WORK_DATA[2].image}
                height={700}
                width={800}
                alt="work-image"
              />
            </Link>
            <Link
              href={WORK_DATA[3].website}
              onMouseEnter={() => {
                setCursorState("md-hovered");
                setCursorText("visit website");
              }}
              onMouseLeave={() => {
                setCursorState("regular");
                setCursorText("");
              }}
              className="flex justify-center items-center lg:h-[24rem] 2xl:h-[28rem] 3xl:h-[40rem] w-full bg-gray-950"
            >
              <Image
                className="w-5/6 aspect-video"
                src={WORK_DATA[3].image}
                height={700}
                width={800}
                alt="work-image"
              />
            </Link>
          </motion.div>
        </motion.div>

        <WorkDescription workIndex={workIndex} />
      </div>
    </div>
  );
};

export default DesktopVersion;

interface TextAnimationProps {
  workIndex: number;
}

const WorkTitle = ({ workIndex }: TextAnimationProps) => {
  const { setCursorState } = useCursorState();

  return (
    <div className="text-4xl xl:text-6xl font-medium">
      {workIndex === 0 && (
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[0].title}</SimpleTextReveal>
        </h3>
      )}
      {workIndex === 1 && (
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[1].title}</SimpleTextReveal>
        </h3>
      )}
      {workIndex === 2 && (
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[2].title}</SimpleTextReveal>
        </h3>
      )}
      {workIndex === 3 && (
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[3].title}</SimpleTextReveal>
        </h3>
      )}
    </div>
  );
};

const WorkJobTitle = ({ workIndex }: TextAnimationProps) => {
  const { setCursorState } = useCursorState();
  return (
    <div className="text-lg md:text-xl lg:text-3xl my-4 lg:my-6">
      {workIndex === 0 && (
        <h4
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          {" "}
          <SimpleTextReveal>{WORK_DATA[0].jobTitle}</SimpleTextReveal>
        </h4>
      )}
      {workIndex === 1 && (
        <h4
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[1].jobTitle}</SimpleTextReveal>
        </h4>
      )}
      {workIndex === 2 && (
        <h4
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[2].jobTitle}</SimpleTextReveal>
        </h4>
      )}
      {workIndex === 3 && (
        <h4
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          <SimpleTextReveal>{WORK_DATA[3].jobTitle}</SimpleTextReveal>
        </h4>
      )}
    </div>
  );
};

const WorkDescription = ({ workIndex }: TextAnimationProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      variants={textAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      key={workIndex}
      className="lg:mt-5 2xl:mt-20 3xl:mt-40"
    >
      {workIndex === 0 && (
        <DescriptionLine description={WORK_DATA[0].description} />
      )}
      {workIndex === 1 && (
        <DescriptionLine description={WORK_DATA[1].description} />
      )}
      {workIndex === 2 && (
        <DescriptionLine description={WORK_DATA[2].description} />
      )}
      {workIndex === 3 && (
        <DescriptionLine description={WORK_DATA[3].description} />
      )}
    </motion.div>
  </AnimatePresence>
);

interface DescriptionLineProps {
  description: string[];
}

const DescriptionLine = ({ description }: DescriptionLineProps) => {
  const { setCursorState } = useCursorState();

  return (
    <ul className="flex flex-col justify-between xl:w-[32rem] 2xl:w-[35rem] 3xl:w-[50rem] text-base lg:text-xl list-none lg:pl-2">
      {description.map((message, i) => (
        <div key={i} className="relative flex items-center overflow-hidden">
          <li
            onMouseEnter={() => setCursorState("md-hovered")}
            onMouseLeave={() => setCursorState("regular")}
            className="text-2xl leading-6 w-[97%] my-2 3xl:my-3"
          >
            <TextReveal animationDelay={0.005} className="h-8">
              {message}
            </TextReveal>
          </li>
        </div>
      ))}
    </ul>
  );
};
