"use client";

import {
  HeroSectionAlt,
  // HeroSection,
  AboutSection,
  WorkSection,
  FeaturedWorkSection,
  ContactSection,
  Navbar,
} from "@/app/(sections)";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSectionAlt timeline={timeline} />
      {/* <HeroSection timeline={timeline} /> */}
      <AboutSection timeline={timeline} />
      <WorkSection timeline={timeline} />
      <FeaturedWorkSection timeline={timeline} />
      <ContactSection timeline={timeline} />
    </div>
  );
};

export default MainPage;
