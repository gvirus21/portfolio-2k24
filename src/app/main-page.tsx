"use client";

import {
  HeroSection,
  AboutSection,
  WorkSection,
  FeaturedWorkSection,
  ContactSection,
  Navbar,
} from "@/app/(sections)";
import TestimonialSection from "./(sections)/Testimonials";
import WhyChooseMeSection from "./(sections)/WhyChooseMe";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const MainPage = ({ timeline }: Props) => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection timeline={timeline} />
      <AboutSection />
      <WhyChooseMeSection />
      <TestimonialSection />
      <WorkSection timeline={timeline} />
      <FeaturedWorkSection timeline={timeline} />
      <ContactSection timeline={timeline} />
    </div>
  );
};

export default MainPage;
