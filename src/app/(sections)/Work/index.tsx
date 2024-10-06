import { Element } from "react-scroll";
import DesktopVersion from "./desktop-ui";
import MobileVersion from "./mobile-ui";
import SectionHeading from "@/components/helpers/Heading";

export const WorkSection = () => {
  return (
    <Element name="work-section" className="relative xl:h-[300vh]">
      <section
        id="work-section"
        className="sticky top-0 xl:h-screen mt-32 lg:mt-[5rem] lg:pt-[3rem] xl:pt-[4rem] 2xl:pt-[6rem] 3xl:pt-[10rem]"
      >
        <div className="relative left-1/2 transform -translate-x-1/2 flex justify-between lg:min-h-[80vh] w-11/12 max-w-[140rem]">
          <SectionHeading
            id="work-heading"
            className="absolute left-0 xl:left-auto xl:right-0"
          >
            My Work
          </SectionHeading>
          <DesktopVersion />
          <MobileVersion />
        </div>
      </section>
    </Element>
  );
};

export default WorkSection;
