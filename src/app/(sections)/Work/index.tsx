import { useRef } from "react";
import { Element } from "react-scroll";
import TextReveal from "@/components/helpers/TextReveal";
import DesktopVersion from "./desktop-ui";
import MobileVersion from "./mobile-ui";

export const WorkSection = () => {
  const workSectionContainer = useRef(null);

  return (
    <Element name="work-section" className="relative xl:h-[100vh]">
      <section
        id="work-section"
        ref={workSectionContainer}
        className="sticky top-0 lg:min-h-[150vh] xl:h-screen mt-32 lg:mt-[5rem] lg:pt-[3rem] xl:pt-[4rem] 2xl:pt-[10rem] bg-red-200"
      >
        <div className="relative left-1/2 transform -translate-x-1/2 flex justify-between lg:min-h-[80vh] w-11/12 max-w-[140rem]">
          <h2 className="absolute left-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase">
            <TextReveal>My Work</TextReveal>
          </h2>
          <DesktopVersion parentRef={workSectionContainer} />
          <MobileVersion />
        </div>
      </section>
    </Element>
  );
};

export default WorkSection;
