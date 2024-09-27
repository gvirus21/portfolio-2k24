import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { TextReveal } from "@/components/helpers";
import profileImage from "/public/assets/gourav-kumar.webp";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/helpers/SectionHeading";
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

  console.log('variants: ', variants)

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
      <section className="relative left-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-between items-center min-h-[90vh] lg:min-h-[70vh] xl:min-h-[80vh] w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem] mt-0 md:mt-20 lg:mt-[4rem] xl:mt-[5rem] 2xl:mt-[14rem]">
        <div className="flex flex-col justify-between">
          <SectionHeading id="about-heading">About Me</SectionHeading>

          <article
            onMouseEnter={() => setCursorState("md-hovered")}
            onMouseLeave={() => setCursorState("regular")}
            className="w-[40rem] hidden xl:block xl:w-[36rem] 2xl:w-[40rem] 3xl:w-[46rem] lg:text-lg 2xl:text-2xl lg:mt-8 xl:mt-10 2xl:mt-12 3xl:mt-16 capitalize font-medium tracking-wide text-justify font-hauora"
          >
            <TextReveal
              containerDelay={0.5}
              animationDelay={0.02}
            >
              Hi, I&apos;m Gourav, a Visual Web Developer. I build Stunning
              and High Converging websites for SaaS Products & HealthCare. I
              help clients elevate their businesses by providing valuable
              creative insights and delivering high-quality, user-centric
              Websites.
            </TextReveal>
          </article>

          <motion.figure
            ref={imageContainerRef}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute top-40 md:top-28 xl:top-1/2 2xl:top-[45%] 3xl:top-[45%] left-1/2 xl:left-auto -translate-x-1/2 xl:translate-x-0 xl:right-0 xl:-translate-y-[45%] h-[26rem] lg:h-[32rem] xl:h-[40rem] 2xl:h-[50rem] max-w-full aspect-[3/4] lg:rounded-lg z-[999] bg-blend-multiply"
          >
            <Image
              src={profileImage}
              fill
              alt="Gourav's profile"
              className="object-cover rounded-3xl"
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
            />
          </motion.figure>
          <DesktopTextSection />
          <MobileTextSection />
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
