import Link from "next/link";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { SimpleTextReveal, TextReveal } from "@/components/helpers";
import useCursorState from "@/store/useCursorState";

export const ContactSection = () => {
  const { setCursorState } = useCursorState();

  return (
    <Element name="contact-section">
      <section className="h-[16rem] md:h-[18rem] lg:h-[24rem] xl:h-[26rem] w-11/12 lg:w-10/12 max-w-[140rem] mx-auto mt-0 sm:mt-40 md:mt-[12rem] lg:mt-[8rem] xl:mt-[12rem] 2xl:mt-[14rem] mb-10 lg:mb-0">
        <motion.div className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto ">
          <div className="flex flex-col w-full md:w-5/6">
            <h2
              onMouseEnter={() => setCursorState("lg-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase"
            >
              <TextReveal
                type="letter"
                containerDelay={0.5}
                animationDelay={0.06}
              >
                Contact Me
              </TextReveal>
            </h2>
            <p
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="text-sm lg:text-base xl:text-xl max-w-[15rem] sm:max-w-[30rem] sm:w-[16rem] lg:w-[20rem] xl:w-full my-4"
            >
              <SimpleTextReveal delay={1}>
                I would love to hear from you, let&apos;s work — together.
              </SimpleTextReveal>
            </p>
            <a
              onMouseEnter={() => setCursorState("sm-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              href="mailto:gouravkumar21.dev@gmail.com"
            >
              <AnimatedButton className="flex justify-center items-center h-[2.5rem] sm:h-[3rem] w-[10rem] sm:w-[13rem] mt-3 lg:mt-5 text-sm md:text-base text-black border border-black rounded-full capitalize font-hauora">
                Email Me
              </AnimatedButton>
            </a>
          </div>

          <div className="hidden sm:flex text-sm lg:text-base justify-between w-[30rem] lg:w-[26rem] xl:w-[22rem] lg:mt-10 xl:mt-20">
            <div className="md:text-left">
              <h3
                onMouseEnter={() => setCursorState("sm-hovered")}
                onMouseLeave={() => setCursorState("regular")}
                className="text-lg md:text-xl mb-4 font-medium"
              >
                <SimpleTextReveal delay={1.5}>Social</SimpleTextReveal>
              </h3>
              <ul className="text-[12px] md:text-sm">
                <li className="mb-2 underline-link-hover-effect">
                  <Link
                    href="https://x.com/GouravKumarDev"
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                  >
                    <SimpleTextReveal delay={1.5}>X / Twitter</SimpleTextReveal>
                  </Link>
                </li>
                <li className="mb-2 underline-link-hover-effect">
                  <Link
                    href="https://github.com/gvirus21"
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                  >
                    <SimpleTextReveal delay={1.5}>Github</SimpleTextReveal>
                  </Link>
                </li>
                <li className="mb-2 underline-link-hover-effect">
                  <Link
                    href="https://www.linkedin.com/in/gouravkumar-21/"
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                  >
                    <SimpleTextReveal delay={1.5}>LinkedIn</SimpleTextReveal>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:text-left">
              <h3
                onMouseEnter={() => setCursorState("sm-hovered")}
                onMouseLeave={() => setCursorState("regular")}
                className="text-lg md:text-xl mb-4 font-medium"
              >
                <SimpleTextReveal delay={1.5}>Contact Details</SimpleTextReveal>
              </h3>
              <ul className="text-[12px] md:text-sm">
                <li className="mb-2 underline-link-hover-effect">
                  <a
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                    href="mailto:gouravkumar21.dev@gmail.com"
                  >
                    <SimpleTextReveal delay={1.5}>
                      gouravkumar21.dev@gmail.com
                    </SimpleTextReveal>
                  </a>
                </li>
                <li className="mb-2 underline-link-hover-effect">
                  <a
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                    href="tel:+918249894413"
                  >
                    <SimpleTextReveal delay={1.5}>
                      +91 824-989-4413
                    </SimpleTextReveal>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default ContactSection;
