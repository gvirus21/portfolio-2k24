import { Element } from "react-scroll";
import DesktopCardsLayout from "./DesktopCardLayout";
import MobileCardsLayout from "./MobileCardLayout";
import SectionHeading from "@/components/helpers/Heading";

export const FeaturedWorkSection = () => {
  return (
    <Element name="featured-work-section">
      <section className="relative left-[50%] -translate-x-[50%] flex justify-between max-h-[120rem] xs:max-h-[130rem] sm:max-h-[145rem] md:max-h-[150rem] lg:max-h-[65rem] xl:max-h-[70rem] 2xl:max-h-[80rem] 3xl:max-h-[100rem] lg:h-[150vh] xl:h-[160vh] 2xl:h-[150vh] 3xl:h-[200vh] w-11/12 max-w-[140rem] mt-[8rem] 2xl:mt-0">
        <SectionHeading id="featured-work-heading" className="absolute left-0">
          Featured Work
        </SectionHeading>
        <DesktopCardsLayout />
        <MobileCardsLayout />
      </section>
    </Element>
  );
};

export default FeaturedWorkSection;
