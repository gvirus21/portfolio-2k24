import HeroSection from "@/components/Hero";
import Navbar from "../components/shared/navbar";
import WorkSection from "./work";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection timeline={timeline} />
      <WorkSection timeline={timeline} />
    </div>
  );
};

export default MainPage;
