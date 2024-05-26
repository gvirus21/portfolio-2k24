import DesktopCardsLayout from "./DesktopCardLayout";
import MobileCardsLayout from "./MobileCardLayout";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const FeaturedWorkSection = ({ timeline }: Props) => {
  return (
    <div className="relative left-[50%] -translate-x-[50%] flex justify-between min-h-[90vh] lg:min-h-0 lg:max-h-[75rem] xl:max-h-[85rem] 3xl:h-[100rem] 3xl:max-h-[100rem] w-11/12 max-w-[140rem] mt-[8rem] 2xl:mt-40">
      <h2 className="absolute left-0 w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-left">
        Featured Work
      </h2>
      <DesktopCardsLayout />
      <MobileCardsLayout />
    </div>
  );
};

export default FeaturedWorkSection;
