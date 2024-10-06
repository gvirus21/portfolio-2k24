"use client";

import {
  HeroSection,
  AboutSection,
  TestimonialSection,
  WorkSection,
  FeaturedWorkSection,
  HowICanHelpSection,
  ServicesSection,
  ContactSection,
  WhyChooseMeSection,
  Navbar,
  WorkProcess,
} from "@/app/(sections)";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      {/* <HeroSection timeline={timeline} /> */}
      {/* <AboutSection /> */}
      {/* <WhyChooseMeSection /> */}
      {/* <TestimonialSection /> */}
      {/* <HowICanHelpSection /> */}
      <WorkProcess />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
