import { Element } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/dist/CustomEase";
import HeroHeading from "./hero-heading";
import HeroSectionActions from "./herosection-actions";
import HeroDescription from "./hero-description";
import InfiniteScrollButton from "./infinite-scroll-button";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const HeroSection = ({ timeline }: Props) => {

  return (
    <Element name="hero-section">
      <section className="relative flex justify-center h-screen w-full">
        <div className="relative flex flex-col justify-between h-[90vh] lg:h-[100vh] w-full sm:w-11/12 lg:w-10/12 xl:w-11/12 2xl:max-w-[140rem] mt-14 lg:mt-0 pt-0 md:pt-8 lg:pt-24 xl:pt-32 2xl:pt-[10rem]">
          <div className="flex flex-col justify-between items-center">
            <HeroHeading />
            <HeroDescription />
            <InfiniteScrollButton />
          </div>
          <HeroSectionActions />
        </div>
      </section>
    </Element>
  );
};

export default HeroSection;
