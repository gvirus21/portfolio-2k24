import { useGSAP } from "@gsap/react";
import { textAppearAnimaton } from "./animations";
import HeroSectionActions from "./herosection-actions";
import Paragraph from "./paragraph";
import MainHeading from "./main-heading";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const HeroSection = ({ timeline }: Props) => {
  useGSAP(() => {
    timeline?.add(textAppearAnimaton());
  }, []);

  return (
    <section className="relative flex justify-center h-screen w-full">
      <div className="relative flex flex-col justify-between h-[90vh] lg:h-[100vh] w-full sm:w-11/12 lg:w-10/12 xl:w-11/12 2xl:max-w-[140rem] mt-14 lg:mt-0 pt-3 md:pt-8 lg:pt-24 xl:pt-32 2xl:pt-[10rem]">
        <MainHeading />
        <Paragraph />
        <HeroSectionActions />
      </div>
    </section>
  );
};

export default HeroSection;
