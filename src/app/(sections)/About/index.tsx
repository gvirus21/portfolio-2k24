import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { TextReveal } from "@/components/helpers";
import profileImage from "/public/assets/gourav-kumar.webp";
import { motion, useInView } from "framer-motion";
import Heading from "@/components/helpers/Heading";
import useCursorState from "@/store/useCursorState";

import {
  smallImageVariants,
  xlImageVariants,
  xxlImageVariants,
  xxxlImageVariants,
} from "./variants";

export const AboutSection = () => {
  const [screenSize, setScreenSize] = useState("small");
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
      } else if (window.innerWidth > 1280) {
        setScreenSize("xl");
      } else {
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
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
          <div className="flex flex-col justify-between w-full lg:w-1/2">
            <Heading id="about-heading" className="mb-6 sm:mb-8">
              About Me
            </Heading>
            <article className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 sm:mb-10">
              Hello! I&apos;m Gourav Kumar, a Web designer specializing in
              creating modern, intuitive websites that help small businesses
              establish a strong online presence.
            </article>

            <div
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="text-base sm:text-lg lg:text-xl font-semibold tracking-wide text-justify font-hauora"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">My Story</h3>
              <article className="mb-4 sm:mb-6">
                <TextReveal containerDelay={0.5} animationDelay={0.02}>
                  Born & Raised in India, I developed a keen interest in Startups
                  and Businesses from a very young age. I have a strong belief
                  that Small Businesses are the backbone of any Economy.
                </TextReveal>
              </article>
              <article className="mb-4 sm:mb-6">
                <TextReveal containerDelay={0.5} animationDelay={0.02}>
                  With my Creativity, Technical skills, and experience working
                  with businesses around the world, I&apos;m here to help
                  Businesses like yours build a strong and attractive online
                  presence.
                </TextReveal>
              </article>
              <article>
                <TextReveal containerDelay={0.5} animationDelay={0.02}>
                  From new startups to existing businesses, whether you need a new
                  website or just want to refresh your old one, I&apos;m here to
                  bring your vision to life.
                </TextReveal>
              </article>
            </div>
          </div>

          <motion.figure
            ref={imageContainerRef}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="relative w-full lg:w-1/2 aspect-[3/4] max-w-md lg:max-w-none"
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
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
