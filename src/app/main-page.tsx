import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import WorkSection from "@/components/Work";
import RecentWorkSection from "@/components/RecentWork";
import ContactSection from "@/components/Contact";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <HeroSection timeline={timeline} />
      <AboutSection timeline={timeline} />
      <WorkSection timeline={timeline} />
      <RecentWorkSection timeline={timeline} />
      <ContactSection timeline={timeline} />
    </div>
  );
};

export default MainPage;
