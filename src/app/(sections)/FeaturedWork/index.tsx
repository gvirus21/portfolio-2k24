import { Element } from "react-scroll";
import DesktopCardsLayout from "./DesktopCardLayout";
import MobileCardsLayout from "./MobileCardLayout";
import TextReveal from "@/components/TextReveal";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const FeaturedWorkSection = ({ timeline }: Props) => {
  return (
    <Element name="featured-work-section">
      <section className="relative left-[50%] -translate-x-[50%] flex justify-between min-h-[90vh] lg:min-h-0 lg:max-h-[75rem] xl:max-h-[85rem] 3xl:h-[100rem] 3xl:max-h-[100rem] w-11/12 max-w-[140rem] mt-[8rem] 2xl:mt-40 overflow-y-hidden">
        <h2 className="absolute left-0 w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-left uppercase">
          <TextReveal>Featured Work</TextReveal>
        </h2>

        <DesktopCardsLayout />
        <MobileCardsLayout />
      </section>
    </Element>
  );
};

export default FeaturedWorkSection;
