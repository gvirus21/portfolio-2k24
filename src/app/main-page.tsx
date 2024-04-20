import HeroSection from "@/components/Hero";
import Navbar from "../components/shared/navbar";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection timeline={timeline} />
    </>
  );
};

export default MainPage;
