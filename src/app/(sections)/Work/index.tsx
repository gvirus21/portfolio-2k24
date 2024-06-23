import { Element } from "react-scroll";
import DesktopVersion from "./desktop-ui";
import MobileVersion from "./mobile-ui";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const WorkSection = ({ timeline }: Props) => {
  return (
    <Element name="work-section">
      <section className="relative left-[50%] -translate-x-[50%] flex justify-between lg:min-h-[80vh] w-11/12 max-w-[140rem] mt-20 lg:mt-[14rem]">
        <h2 className="absolute left-0 lg:left-auto lg:right-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          My Work
        </h2>
        <DesktopVersion />
        <MobileVersion />
      </section>
    </Element>
  );
};

export default WorkSection;
