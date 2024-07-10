import { Element } from "react-scroll";
import TextReveal from "@/components/helpers/TextReveal";
import DesktopCardsLayout from "./DesktopCardLayout";
import MobileCardsLayout from "./MobileCardLayout";

export const FeaturedWorkSection = () => {
  return (
    <Element name="featured-work-section">
      <section className="relative left-[50%] -translate-x-[50%] flex justify-between max-h-[120rem] xs:max-h-[130rem] sm:max-h-[145rem] md:max-h-[150rem] lg:max-h-[65rem] xl:max-h-[70rem] 2xl:max-h-[80rem] 3xl:max-h-[100rem] lg:h-[150vh] xl:h-[160vh] 2xl:h-[150vh] 3xl:h-[200vh] w-11/12 max-w-[140rem] mt-[8rem] 2xl:mt-0">
        <h2 className="absolute left-0 w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-left uppercase">
          <TextReveal type="letter" containerDelay={0.5} animationDelay={0.04}>
            Featured Work
          </TextReveal>
        </h2>
        <DesktopCardsLayout />
        <MobileCardsLayout />
      </section>
    </Element>
  );
};

export default FeaturedWorkSection;
