import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
import { WORK_DATA } from "./work-data";

const images = [
  {
    id: 0,
    url: "/assets/projects/meron.webp",
  },
  {
    id: 1,
    url: "/assets/projects/nepom.webp",
  },
  {
    id: 2,
    url: "/assets/projects/vmeet.webp",
  },
];

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

interface Props {
  parentRef: React.MutableRefObject<null>;
}

const DesktopVersion = ({ parentRef }: Props) => {
  const [scrolling, setScrolling] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const innerContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      const workSection = document.getElementById("work-section");
      const workSectionScrollY = workSection?.offsetTop || 0; // scroll value from the work section
      const workSectionViewportHeight = workSection?.offsetHeight || 0; // height of the visible work section

      if (workSectionScrollY && workSectionViewportHeight) {
        setScrolling(true);
        let newIndex = workIndex;

        const thresholdHeight = workSectionViewportHeight / 3;
        
        const firstThreshold = thresholdHeight;
        const secondThreshold = thresholdHeight * 2;

        if (workSectionScrollY >= secondThreshold) {
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
    <div className="relative hidden lg:flex flex-row justify-between min-h-[53rem] xl:min-h-0 xl:h-[40rem] mt-32 mx-auto w-10/12 xl:w-full">
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

        <div className="xl:absolute xl:top-[12%] 2xl:top-14 3xl:top-0 xl:right-0 h-[12rem] lg:min-h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem] aspect-[14/9] bg-white/50 my-10 mx-auto overflow-hidden">
          <motion.div
            ref={innerContainer}
            style={{
              top: workIndex * -100 + "%",
              transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            className="relative 3xl:h-[120rem]"
          >
            <div className="flex justify-center items-center lg:h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem]  bg-[#a6ee1f]">
              <Image
                className="w-5/6 aspect-video"
                src={images[0].url}
                height={700}
                width={800}
                alt="work-image"
              />
            </div>
            <div className="flex justify-center items-center lg:h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem] w-full bg-slate-300">
              <Image
                className="w-5/6 aspect-video"
                src={images[1].url}
                height={700}
                width={800}
                alt="work-image"
              />
            </div>
            <div className="flex justify-center items-center lg:h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem] w-full bg-gray-800">
              <Image
                className="w-5/6 aspect-video"
                src={images[2].url}
                height={700}
                width={800}
                alt="work-image"
              />
            </div>
          </motion.div>
        </div>

        <WorkDescription workIndex={workIndex} />
      </div>
    </div>
  );
};

export default DesktopVersion;

interface TextAnimationProps {
  workIndex: number;
}

const WorkTitle = ({ workIndex }: TextAnimationProps) => (
  <div className="text-5xl xl:text-6xl font-thin">
    {workIndex === 0 && <h3>{WORK_DATA[0].title}</h3>}
    {workIndex === 1 && <h3>{WORK_DATA[1].title}</h3>}
    {workIndex === 2 && <h3>{WORK_DATA[2].title}</h3>}
    {workIndex === 3 && <h3>{WORK_DATA[3].title}</h3>}
  </div>
);

const WorkJobTitle = ({ workIndex }: TextAnimationProps) => (
  <div className="text-lg md:text-xl lg:text-4xl my-4 lg:my-10 font-semibold font-sendflowers tracking-widest">
    {workIndex === 0 && <h4>{WORK_DATA[0].jobTitle}</h4>}
    {workIndex === 1 && <h4>{WORK_DATA[1].jobTitle}</h4>}
    {workIndex === 2 && <h4>{WORK_DATA[2].jobTitle}</h4>}
    {workIndex === 3 && <h4>{WORK_DATA[3].jobTitle}</h4>}
  </div>
);

const WorkDescription = ({ workIndex }: TextAnimationProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      variants={textAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      key={workIndex}
      className="lg:mt-5 xl:mt-10 2xl:mt-20 3xl:mt-40"
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
  return (
    <ul className="flex flex-col justify-between xl:w-[32rem] 2xl:w-[36rem] 3xl:w-[50rem] text-base lg:text-xl 2xl:text-2xl list-none lg:pl-2">
      {description.map((message, i) => (
        <div
          key={i}
          className="relative flex items-center overflow-hidden my-2"
        >
          <BsDot className="h-10 w-10 mr-4 mt-1" />
          <li className="w-[97%]">{message}</li>
        </div>
      ))}
    </ul>
  );
};
