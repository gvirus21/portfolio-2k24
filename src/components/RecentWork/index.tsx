import DesktopCardsLayout from "./DesktopCardLayout";
import MobileCardsLayout from "./MobileCardLayout";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const RecentWorkSection = ({ timeline }: Props) => {
  return (
    <div className="relative left-[50%] -translate-x-[50%] flex justify-between min-h-[90vh] w-11/12 max-w-[140rem] mt-[16rem] lg:mt-[14rem]">
      <h2 className="absolute left-0 w-full text-3xl md:text-5xl lg:text-8xl text-left">
        Featured Work
      </h2>
      <DesktopCardsLayout />
      <MobileCardsLayout />
    </div>
  );
};

export default RecentWorkSection;
