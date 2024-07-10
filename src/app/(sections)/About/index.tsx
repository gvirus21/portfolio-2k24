import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { TextReveal, SimpleTextReveal } from "@/components/helpers";
import profileImage from "/public/assets/gourav-kumar.webp";
import { motion, useInView } from "framer-motion";

const aboutPoints = [
  "I started my career as an iOS dev but later transitioned to a Frontend developer.",
  "I worked as a lead Frontend dev @playgrounds.xyz",
  "I've collaborated with major web3 organizations around the world, like BanklessDAO and ForefrontDAO.",
  "I participated in the RoadToWeb3 hackathon, where my team and I built awesome projects and walked away with some cool goodies. It was like Christmas, but for coders!",
  "My Primary Wepons are: HTML, CSS, Javascript, Typescript, TailwindCSS, ReactJs, Next Js & a bit of Rust.",
];

// lg: 0
// xl: -320
// 2xl:-380
// 3xl:-280

const smallImageVariants = {
  initial: {
    x: "-50%",
    y: 50,
    opacity: 0,
  },
  animate: {
    x: "-50%",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const largeImageVariants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export const AboutSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth > 1280 ? true : false
  );
  const imageContainerRef = useRef(null);
  const isInView = useInView(imageContainerRef, { amount: 0.4, once: true });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };
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
            <TextReveal
              type="letter"
              animationDelay={0.07}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl 3xl:text-7xl md:mb-10 lg:mb-0 uppercase"
            >
              About Me
            </TextReveal>
            <p className="w-[40rem] hidden xl:block xl:w-[36rem] 2xl:w-[40rem] 3xl:w-[46rem] lg:text-xl 2xl:text-2xl lg:mt-8 xl:mt-10 2xl:mt-16 capitalize font-medium tracking-wider">
              <TextReveal containerDelay={0.5} animationDelay={0.02}>
                Hey, I&apos;m Gourav! I&apos;m a frontend developer from India.
                I enjoy creating web projects that are both functional and
                aesthetically pleasing, with a focus on great user experience.
                In my downtime, I love watching anime and picking up new skills.
              </TextReveal>
            </p>
          </>

          {/* Profile photo */}
          <motion.div
            ref={imageContainerRef}
            variants={isLargeScreen ? largeImageVariants : smallImageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute top-20 md:top-28 xl:top-1/2 left-1/2 xl:left-auto -translate-x-1/2 xl:translate-x-0 xl:right-0 xl:-translate-y-[45%] h-[26rem] lg:h-[32rem] xl:h-[40rem] 2xl:h-[50rem] max-w-full aspect-[3/4] rounded-md lg:rounded-lg z-[999] bg-blend-multiply"
          >
            <Image
              src={profileImage}
              fill
              alt="profile-image"
              className="object-cover"
            />
          </motion.div>

          {/* Desktop text seciton */}
          <div className="hidden xl:flex flex-col">
            <div className="mt-20 xl:mt-[5rem] 2xl:mt-[14rem] 3xl:mt-[12rem]">
              <h3 className="font-medium xl:text-4xl 2xl:text-5xl font-sendflowers">
                <SimpleTextReveal delay={1}>My Experience:</SimpleTextReveal>
              </h3>
              <ul className="flex flex-col justify-between min-h-[18rem] xl:min-h-[22rem] w-[26rem] xl:w-[35rem] 2xl:w-[44rem] 3xl:w-[48rem] mt-10 xl:mt-8 2xl:mt-16 text-lg 2xl:text-xl tracking-wider">
                {aboutPoints.map((point, i) => (
                  <li key={i} className="capitalize xl:my-2 2xl:my-3 leading-6">
                    <TextReveal
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

          {/* mobile text seciton */}
          <div className="flex flex-col xl:hidden mt-[32rem] lg:mt-[40rem] px-4">
            <p className="text-lg lg:text-xl">
              <TextReveal containerDelay={0.1} animationDelay={0.01}>
                Hey, I&apos;m Gourav! I&apos;m a frontend developer from India.
                I enjoy creating web projects that are both functional and
                aesthetically pleasing, with a focus on great user experience.
                In my downtime, I love watching anime and picking up new skills.
              </TextReveal>
            </p>
            <div>
              <h3 className="font-medium text-3xl mt-[4rem] text-center md:text-left font-sendflowers">
                <SimpleTextReveal delay={1}>My Experience</SimpleTextReveal>
              </h3>
              <ul className="flex flex-col justify-between min-h-[22rem] md:min-h-[20rem] lg:min-h-[16rem] leading-[1.3rem] mt-12 text-lg">
                {aboutPoints.map((point, i) => (
                  <li key={i} className="mb-3 sm:mb-0">
                    <TextReveal
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
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
