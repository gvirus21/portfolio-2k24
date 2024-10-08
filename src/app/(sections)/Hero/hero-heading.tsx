import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "@/components/helpers/SplitText";
import useCursorState from "@/store/useCursorState";

export const HeroHeading = () => {
  const { setCursorState } = useCursorState();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.7 } });
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
  });

  return (
    <div className="flex flex-col justify-between leading-[2.2rem] xs:leading-none sm:items-center text-[2rem] xs:text-4xl sm:text-4xl md:text-[2.7rem] xl:text-7xl 2xl:text-7xl 3xl:text-8xl min-h-[12rem] xs:min-h-0 h-[16rem] xs:h-[14rem] sm:h-[12rem] md:h-[15rem] xl:h-[20rem] 2xl:h-[24rem] 3xl:h-[30rem] mt-5 sm:mt-14 md:mt-10 lg:mt-0 xl:mt-5 3xl:mt-10 tracking-wider font-quattrocento">
      <h1
        onMouseEnter={() => setCursorState("xl-hovered")}
        onMouseLeave={() => setCursorState("regular")}
        className="hero-heading"
      >
        <SplitText wordClassName="translate-y-full">
          I CREATE TAILORED
        </SplitText>
      </h1>

      <h1
        className="hero-heading"
        onMouseEnter={() => setCursorState("xl-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        <SplitText wordClassName="translate-y-full">DESIGNER WEBSITES FOR</SplitText>
      </h1>
      <h1
        className="hero-heading"
        onMouseEnter={() => setCursorState("xl-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        <SplitText wordClassName="translate-y-full">
          SMALL BUSINESSES &
        </SplitText>
      </h1>
      <h1
        className="hero-heading"
        onMouseEnter={() => setCursorState("xl-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        <SplitText wordClassName="translate-y-full">STARTUPS</SplitText>
      </h1>
    </div>
  );
};

export default HeroHeading;
