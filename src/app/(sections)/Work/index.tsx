import { Element } from "react-scroll";
import DesktopVersion from "./desktop-ui";
import MobileVersion from "./mobile-ui";
import { useRef } from "react";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const WorkSection = ({ timeline }: Props) => {
  const workSectionContainer = useRef(null);

  return (
    <Element name="work-section" className="relative lg:h-[180rem]">
      <section
        id="work-section"
        ref={workSectionContainer}
        className="sticky top-0 h-screen lg:mt-[5rem] lg:pt-[10rem]"
      >
        <div className="relative left-1/2 transform -translate-x-1/2 flex justify-between lg:min-h-[80vh] w-11/12 max-w-[140rem]">
          <h2 className="absolute left-0 lg:left-auto lg:right-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            My Work
          </h2>
          <DesktopVersion parentRef={workSectionContainer} />
          <MobileVersion />
        </div>
      </section>
    </Element>
  );
};

export default WorkSection;
