import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const HeroDescription = () => {
  const heroDescriptionRef = useRef(null);

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
      ref={heroDescriptionRef}
      className="sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl xs:w-[20rem] sm:w-[23rem] md:w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[46rem] text-center tracking-wider sm:leading-10 mt-10 sm:mt-8 md:mt-12 2xl:mt-16 3xl:mt-24 capitalize font-sendflowers opacity-0"
    >
      I help businesses build their awesome and high converging website.
    </p>
  );
};

export default HeroDescription