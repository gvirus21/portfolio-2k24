import { useGSAP } from "@gsap/react";
import { textAppearAnimaton } from "./animations";
import { cn } from "@/lib/utils";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const AnimatedText = ({
  children,
  className,
  containerHeight
}: {
  children: React.ReactNode;
  className?: string;
  containerHeight?: string;
}) => {
  return (
    <div className={cn("h-44 overflow-hidden", containerHeight)}>
      <h1 className={cn(className, "large-animated-text")}>
        {children}
      </h1>
    </div>
  );
};

const HeroSection = ({ timeline }: Props) => {
  useGSAP(() => {
    timeline?.add(textAppearAnimaton());
  }, []);

  return (
    <section className="relative h-screen w-screen  text-black">
      <div className="absolute top-40 left-20 w-[70rem]">
        <AnimatedText containerHeight="h-20" className="text-[3rem] tracking-tighter">hello, i am</AnimatedText>
        <AnimatedText className="text-[10rem] leading-[10rem] uppercase mt-0">Gourav</AnimatedText>
        <AnimatedText className="text-[11rem] leading-[10rem] ml-28 uppercase mt-5">Kumar</AnimatedText>
      </div>

      <div className="absolute bottom-20 right-20 w-[70rem] text-[9rem] leading-[12rem] text-right">
        <AnimatedText>FRONTEND</AnimatedText>
        <AnimatedText className="text-[10rem]">DEVELOPER</AnimatedText>
      </div>

      {/* <p className="absolute top-[35%] right-60 text-2xl w-[24rem] text-justify leading-10">
        I HELP COMPANIES, BRANDS AND ENTREPRENEURS DEVELOP ANY DIGITAL PRODUCTS
        AND ACHIEVE THEIR GOALS.
      </p> */}
    </section>
  );
};

export default HeroSection;
