import { SimpleTextReveal } from "@/components/helpers";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const companyLogos = [
  {
    id: "playgrounds",
    src: "/assets/company-logos/playgrounds.png",
    link: "https://playgrounds.network",
  },
  {
    id: "forefront",
    src: "/assets/company-logos/forefront.png",
    link: "https://forefront.com",
  },
  {
    id: "bankless",
    src: "/assets/company-logos/bankless.png",
    link: "https://bankless.com",
  },
  {
    id: "codewalla",
    src: "/assets/company-logos/codewalla.png",
    link: "https://codewalla.com",
  },
];

export const WhyChooseMeSection = () => {
  const { setCursorState } = useCursorState();
  const textContainerRef = useRef(null);

  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 xl:py-24 2xl:pt-32 2xl:mt-10">
      <div className="max-w-3xl mx-auto">
        <div ref={textContainerRef}>
          <h3
            onMouseEnter={() => setCursorState("lg-hovered")}
            onMouseLeave={() => setCursorState("regular")}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide mb-8 text-center"
          >
            <SimpleTextReveal delay={0.5}>Why Choose Me?</SimpleTextReveal>
          </h3>
          <div
            onMouseEnter={() => setCursorState("md-hovered")}
            onMouseLeave={() => setCursorState("regular")}
            className="space-y-6 text-base sm:text-lg lg:text-xl"
          >
            <div>
              <TextReveal
                isContainerInView={isInView}
                animationDelay={0.02}
              >
                As a solo web developer, I have a unique perspective on what my
                clients need for their business. Through my websites, I help them
                achieve their goals, something big agencies often struggle with.
              </TextReveal>
            </div>

            <div>
              <TextReveal
                isContainerInView={isInView}
                animationDelay={0.02}
              >
                My top priority is to deliver a high-quality website that not only
                looks great but also meets the client&apos;s needs.
              </TextReveal>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-lg sm:text-2xl font-semibold text-left md:text-center uppercase underline underline-offset-4 mb-4 md:mb-8">
              Organizations I&apos;ve Worked With
            </h3>
            <div className="flex sm:grid-cols-4 gap-6 justify-between">
              {companyLogos.map((company) => (
                <Link
                  key={company.id}
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 sm:w-28 sm:h-28 relative"
                >
                  <Image
                    src={company.src}
                    alt={company.id}
                    fill
                    style={{ objectFit: "contain" }}
                    className="filter brightness-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeSection;
