import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "@/components/helpers/SplitText";

export const HeroHeading = () => {
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
    <div className="flex flex-col justify-between leading-[2.5rem] xs:leading-none sm:items-center text-[2rem] xs:text-4xl sm:text-4xl md:text-[2.7rem] xl:text-6xl 2xl:text-7xl 3xl:text-8xl min-h-[16rem] xs:min-h-0 xs:h-[14rem] sm:h-[12rem] md:h-[15rem] xl:h-[20rem] 2xl:h-[24rem] 3xl:h-[30rem] mt-8 sm:mt-14 md:mt-10 lg:mt-0 xl:mt-5 3xl:mt-10 tracking-wider">
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
        <SplitText wordClassName="translate-y-full">BUILDING THE WEB</SplitText>
      </h1>
    </div>
  );
};

export default HeroHeading;
