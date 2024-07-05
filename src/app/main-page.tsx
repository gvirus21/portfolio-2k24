"use client";

import {
  HeroSection,
  AboutSection,
  WorkSection,
  FeaturedWorkSection,
  ContactSection,
} from "@/app/(sections)";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <div className="relative">
      <HeroSection timeline={timeline} />
      {/* <div className="absolute top-[85vh] ---top-[110vh] left-1/2 -translate-x-1/2 w-[85%] aspect-video rounded-xl glassmorphism"></div> */}
      <AboutSection timeline={timeline} />
      <WorkSection timeline={timeline} />
      <FeaturedWorkSection timeline={timeline} />
      <ContactSection timeline={timeline} />
    </div>
  );
};

export default MainPage;
