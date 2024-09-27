"use client";

import {
  HeroSection,
  AboutSection,
  MoreInfoSection,
  TestimonialSection,
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
      <HeroSection timeline={timeline} />
      <AboutSection />
      <MoreInfoSection />
      <TestimonialSection />
      <WorkSection />
      <FeaturedWorkSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
