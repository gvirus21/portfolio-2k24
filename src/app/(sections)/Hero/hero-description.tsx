import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useCursorState from "@/store/useCursorState";

export const HeroDescription = () => {
  const heroDescriptionRef = useRef(null);
  const { setCursorState } = useCursorState();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.7 } });
    tl.to(
      heroDescriptionRef.current,
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.in",
      },
      0.6
    );
  }, []);
  return (
    <p
      onMouseEnter={() => setCursorState("md-hovered")}
      onMouseLeave={() => setCursorState("regular")}
      ref={heroDescriptionRef}
      className="text-base md:text-xl xl:text-lg 2xl:text-3xl 3xl:text-4xl xs:w-[20rem] sm:w-[23rem] md:w-[24rem] xl:w-[32rem] 2xl:w-[38rem] 3xl:w-[46rem] text-center tracking-wider sm:leading-10 mt-10 sm:mt-8 md:mt-12 xl:mt-10 2xl:mt-16 3xl:mt-24 capitalize italic opacity-0"
    >
      I propel businesses towards success through my expertise in bringing their
      vision to life through design.
    </p>
  );
};

export default HeroDescription;
