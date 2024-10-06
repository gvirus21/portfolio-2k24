"use client";

import {
  HeroSection,
  AboutSection,
  MoreInfoSection,
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
      <Navbar />
      <HeroSection timeline={timeline} />
      <AboutSection />
      {/* <MoreInfoSection /> */}
      <WhyChooseMeSection />
      <TestimonialSection />
      <HowICanHelpSection />
      <WorkProcess />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
