'use client';

import FeaturedWorkSection from "./FeaturedWork";
import WorkSection from "./Work";
import { ContactSection, Navbar } from "../(sections)";

const WorkPage = () => {
  return (
    <section className="">
      <Navbar />
      <WorkSection />
      <FeaturedWorkSection />
      <ContactSection />
    </section>
  );
};

export default WorkPage;
