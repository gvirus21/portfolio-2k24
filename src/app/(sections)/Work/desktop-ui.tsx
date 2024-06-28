import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { WORK_DATA } from "./work-data";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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

interface Props {
  parentRef: React.MutableRefObject<null>;
}

const DesktopVersion = ({ parentRef }: Props) => {
  const [scrolling, setScrolling] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [currentWork, setCurrentWork] = useState(WORK_DATA[workIndex]);

  const innerContainer = useRef(null);

  useEffect(() => {
    setCurrentWork(WORK_DATA[workIndex]);
  }, [workIndex]);

  useEffect(() => {
    console.log("work index: ", workIndex);
  }, [workIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      const workSection = document.getElementById("work-section");
      const workSectionScrollY = workSection?.offsetTop || 0; // scroll value from the work section
      const workSectionViewportHeight = workSection?.offsetHeight || 0; // height of the visible work section
      // const fullWorkSectionHeight = workSectionViewportHeight * 3; // full height of the worksection, ( worksection is 300vh, so we are multiplying it with 3)
      const fullWorkSectionHeight = workSectionViewportHeight * 1; // full height of the worksection, ( worksection is 200rem, so we are multiplying it with 3)

      if (workSectionScrollY && fullWorkSectionHeight) {
        setScrolling(true);
        let newIndex = workIndex;

        const sectionHeight = fullWorkSectionHeight / 3;
        const firstThreshold = sectionHeight;
        const secondThreshold = sectionHeight * 2;

        if (workSectionScrollY >= secondThreshold) {
          setWorkIndex(2);
        } else if (workSectionScrollY >= firstThreshold) {
          setWorkIndex(1);
        } else if (workSectionScrollY < firstThreshold) {
          setWorkIndex(0);
        }

        if (newIndex !== workIndex) {
          const newScrollY = workSectionScrollY + newIndex * sectionHeight;
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

    // Clean up the observer and event listener on unmount
    return () => {
      if (workSection) {
        observer.unobserve(workSection);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling, workIndex]);

  return (
    <div className="relative hidden lg:flex flex-row justify-between min-h-[53rem] xl:min-h-0 xl:h-[40rem] mt-32 mx-auto w-10/12 xl:w-full">
      <div className="flex flex-col justify-between h-[50rem] xl:h-[40rem]">
        <div className="w-[40rem] 2xl:w-full">
          <h3 className="text-5xl xl:text-6xl font-thin">
            {currentWork.title}
          </h3>
          <h4 className="text-lg md:text-xl lg:text-4xl my-4 lg:my-10 font-semibold">
            {currentWork.jobTitle}
          </h4>
        </div>
        <div className="xl:absolute xl:top-[12%] 2xl:top-14 3xl:top-0 xl:right-0 h-[12rem] lg:min-h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem] aspect-[14/9] bg-white/50 my-10 mx-auto overflow-hidden">
          <motion.div
            ref={innerContainer}
            style={{
              top: workIndex * -100 + "%",
              transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            className="relative 3xl:h-[120rem] bg-cyan-400"
          >
            <div className="flex justify-center items-center 3xl:h-[40rem] w-full bg-lime-400">
              <Image
                src={images[0].url}
                height={700}
                width={800}
                alt="work-image"
              />
            </div>
            <div className="flex justify-center items-center 3xl:h-[40rem] w-full bg-slate-300">
              <Image
                src={images[1].url}
                height={700}
                width={800}
                alt="work-image"
              />
            </div>
            <div className="flex justify-center items-center 3xl:h-[40rem] w-full bg-gray-800">
              <Image
                src={images[2].url}
                height={700}
                width={800}
                alt="work-image"
              />
            </div>
          </motion.div>
        </div>

        {/* desc */}
        <AnimatePresence>
          <div>
            {workIndex === 0 && (
              <Desctiption description={WORK_DATA[0].description} />
            )}
            {workIndex === 1 && (
              <Desctiption description={WORK_DATA[1].description} />
            )}
            {workIndex === 2 && (
              <Desctiption description={WORK_DATA[2].description} />
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DesktopVersion;

interface DescriptionProps {
  description: string[];
}

const Desctiption = ({ description }: DescriptionProps) => {
  return (
    <motion.ul className="flex flex-col justify-between xl:w-[32rem] 2xl:w-[36rem] 3xl:w-[50rem] text-base lg:text-xl list-disc lg:pl-6">
      {description.map((message, i) => (
        <li key={i} className="my-2">
          {message}
        </li>
      ))}
    </motion.ul>
  );
};
