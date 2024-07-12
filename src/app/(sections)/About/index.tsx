import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { TextReveal } from "@/components/helpers";
import profileImage from "/public/assets/gourav-kumar.webp";
import { motion, useInView } from "framer-motion";
import useCursorState from "@/store/useCursorState";
import DesktopTextSection from "./desktop-text-section";
import MobileTextSection from "./mobile-text-section";
import {
  smallImageVariants,
  xlImageVariants,
  xxlImageVariants,
  xxxlImageVariants,
} from "./variants";

export const AboutSection = () => {
  const getInitialScreenSize = () => {
    if (typeof window !== "undefined" && window.innerWidth > 2000) {
      return "3xl";
    } else if (typeof window !== "undefined" && window.innerWidth > 1536) {
      return "2xl";
    } else if (typeof window !== "undefined" && window.innerWidth > 1280) {
      return "xl";
    } else {
      return "small";
    }
  };

  const [screenSize, setScreenSize] = useState(getInitialScreenSize);
  const imageContainerRef = useRef(null);
  const { setCursorState } = useCursorState();
  const isInView = useInView(imageContainerRef, { amount: 0.4, once: true });

  const getVariants = () => {
    switch (screenSize) {
      case "small":
        return smallImageVariants;
      case "xl":
        return xlImageVariants;
      case "2xl":
        return xxlImageVariants;
      case "3xl":
        return xxxlImageVariants;
      default:
        return {};
    }
  };

  const variants = getVariants();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 2000) {
        setScreenSize("3xl");
      } else if (window.innerWidth > 1536) {
        setScreenSize("2xl");
      } else if (window.innerWidth > 2000) {
        setScreenSize("xl");
      } else if (window.innerWidth < 1280) {
        setScreenSize("small");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Element name="about-section">
      <section
        className="relative left-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-between min-h-[90vh] lg:min-h-[70vh] 
      2xl:min-h-[40vh] w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem] mt-20 md:mt-20 lg:mt-[8rem] 2xl:mt-[14rem]"
      >
        <div className="flex flex-col justify-between">
          <>
            <h3
              onMouseEnter={() => setCursorState("lg-hovered")}
              onMouseLeave={() => setCursorState("regular")}
            >
              <TextReveal
                type="letter"
                animationDelay={0.07}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl 3xl:text-7xl md:mb-10 lg:mb-0 uppercase"
              >
                About Me
              </TextReveal>
            </h3>
            <p
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="w-[40rem] hidden xl:block xl:w-[36rem] 2xl:w-[40rem] 3xl:w-[46rem] lg:text-xl 2xl:text-2xl lg:mt-8 xl:mt-10 2xl:mt-16 capitalize font-medium tracking-wider"
            >
              <TextReveal containerDelay={0.5} animationDelay={0.02}>
                Hey, I&apos;m Gourav! I&apos;m a frontend developer from India.
                I enjoy creating web projects that are both functional and
                aesthetically pleasing, with a focus on great user experience.
                In my downtime, I love watching anime and picking up new skills.
              </TextReveal>
            </p>
          </>
          <motion.div
            ref={imageContainerRef}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute top-20 md:top-28 xl:top-1/2 left-1/2 xl:left-auto -translate-x-1/2 xl:translate-x-0 xl:right-0 xl:-translate-y-[45%] h-[26rem] lg:h-[32rem] xl:h-[40rem] 2xl:h-[50rem] max-w-full aspect-[3/4] rounded-md lg:rounded-lg z-[999] bg-blend-multiply"
          >
            <Image
              src={profileImage}
              fill
              alt="profile-image"
              className="object-cover"
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
            />
          </motion.div>
          <DesktopTextSection />
          <MobileTextSection />
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
