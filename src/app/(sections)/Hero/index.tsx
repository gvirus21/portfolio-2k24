import { useRef } from "react";
import { Element } from "react-scroll";
import HeroSectionActions from "./herosection-actions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "@/components/helpers/SplitText";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const HeroSection = ({ timeline }: Props) => {
  const heroDescriptionRef = useRef(null);
  const infiniteScrollButtonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.7 } });

    // hero text animation.
    const headings = document.querySelectorAll(".hero-heading");
    headings.forEach((heading, index) => {
      const el = heading.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });

    // Description intro animation.
    tl.to(
      heroDescriptionRef.current,
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.in",
      },
      0.6
    );

    // infinite scroll button animation.
    tl.to(
      infiniteScrollButtonRef.current,
      {
        opacity: 1,
        marginLeft: 0,
        marginRight: 0,
        ease: "power1.out",
      },
      1.5 //delay
    );
  });

  return (
    <Element name="hero-section">
      <section className="relative flex justify-center h-screen w-full">
        <div className="relative flex flex-col justify-between h-[90vh] lg:h-[100vh] w-full sm:w-11/12 lg:w-10/12 xl:w-11/12 2xl:max-w-[140rem] mt-14 lg:mt-0 pt-3 md:pt-8 lg:pt-24 xl:pt-32 2xl:pt-[10rem]">
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col justify-between leading-[3rem] xs:leading-none sm:items-center text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl h-[17rem] xs:h-[12rem] sm:h-[12rem] md:h-[15rem] xl:h-[20rem] 2xl:h-[24rem] 3xl:h-[30rem] mt-8 sm:mt-14 md:mt-10 lg:mt-0 xl:mt-5 3xl:mt-10 tracking-wider">
              <h1 className="hero-heading">
                <SplitText wordClassName="translate-y-full">I AM A</SplitText>
                <span className="overflow-hidden inline-block">
                  <span className="translate-y-full relative inline-block font-sendflowers">
                    CREATIVE
                  </span>
                </span>
              </h1>

              <h1 className="hero-heading">
                <SplitText wordClassName="translate-y-full">
                  FRONTEND WEB DEVELOPER
                </SplitText>
              </h1>
              <h1 className="hero-heading">
                <SplitText wordClassName="translate-y-full">
                  WITH A PASSION FOR
                </SplitText>
              </h1>
              <h1 className="hero-heading">
                <SplitText wordClassName="translate-y-full">
                  BUILDING THE WEB
                </SplitText>
              </h1>
            </div>

            <p
              ref={heroDescriptionRef}
              className="sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl xs:w-[20rem] sm:w-[23rem] md:w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[46rem] text-center tracking-wider sm:leading-10 mt-10 sm:mt-8 md:mt-12 2xl:mt-16 3xl:mt-24 capitalize font-sendflowers opacity-0"
            >
              I help businesses build their awesome and high converging website.
            </p>

            <div
              ref={infiniteScrollButtonRef}
              className="flex justify-start items-center py-1 sm:h-10 md:h-12 md:w-[12rem] xl:w-[15rem] border-2 border-black rounded-full mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 3xl:mt-32 overflow-hidden --pl-2 opacity-0 ml-10 -mr-10"
            >
              <div className="group md:text-sm xl:text-base font-hauora text-nowrap text-left whitespace-nowrap cursor-pointer">
                <span className="group-hover:pause animate-loopL inline-block">
                  Open For Work - Contact Now -&nbsp;
                </span>
                <span className="group-hover:pause animate-loopL inline-block">
                  Open For Work - Contact Now -&nbsp;
                </span>
              </div>
            </div>
          </div>
          <HeroSectionActions />
        </div>
      </section>
    </Element>
  );
};

export default HeroSection 
