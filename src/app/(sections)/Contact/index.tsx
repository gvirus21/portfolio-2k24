import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { SimpleTextReveal } from "@/components/helpers";
import useCursorState, { CursorState } from "@/store/useCursorState";
import { BsTwitterX } from "react-icons/bs";
import {
  RiGithubLine,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";
import EmailButton from "./EmailButton";
import { ContactHeader } from "./AnimatedButton";
import SocialLink, { SocialLinkProps } from "./SocialLink";

interface SocialLinksProps {
  links: SocialLinkProps[];
  setCursorState: (state: CursorState) => void;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, setCursorState }) => (
  <ul className="flex justify-between items-center text-[12px] md:text-sm mt-10">
    {links.map((link, index) => (
      <SocialLink key={index} {...link} setCursorState={setCursorState} />
    ))}
  </ul>
);

export const ContactSection: React.FC = () => {
  const { setCursorState } = useCursorState();

  const socialLinks: SocialLinkProps[] = [
    {
      href: "https://x.com/GouravKumarDev",
      icon: BsTwitterX,
      label: "X / Twitter",
      setCursorState: (state: CursorState) => setCursorState(state),
    },
    {
      href: "https://instagram.com/gvirus21",
      icon: RiInstagramLine,
      label: "Instagram",
      setCursorState: (state: CursorState) => setCursorState(state),
    },
    {
      href: "https://www.linkedin.com/in/gouravkumar-21/",
      icon: RiLinkedinBoxFill,
      label: "LinkedIn",
      setCursorState: (state: CursorState) => setCursorState(state),
    },
    {
      href: "https://github.com/gvirus21",
      icon: RiGithubLine,
      label: "Github",
      setCursorState: (state: CursorState) => setCursorState(state),
    },
  ];

  return (
    <Element name="contact-section">
      <section className="h-[16rem] md:h-[18rem] lg:h-[24rem] xl:h-[20rem] w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem] mx-auto mt-0 sm:mt-40 md:mt-[12rem] lg:mt-[8rem] xl:mt-[12rem] 2xl:mt-[14rem] mb-10 lg:mb-0">
        <motion.div className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto">
          <div className="flex flex-col w-full md:w-5/6">
            <ContactHeader />
            <p
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="text-sm lg:text-base xl:text-xl max-w-[15rem] sm:max-w-[30rem] sm:w-[16rem] lg:w-[20rem] xl:w-full mt-6"
            >
              <SimpleTextReveal delay={1}>
                I would love to hear from you, let&apos;s work — together.
              </SimpleTextReveal>
            </p>
            <EmailButton setCursorState={setCursorState} />
          </div>

          <div className="hidden sm:flex text-sm lg:text-base justify-between w-[30rem] lg:w-[26rem] xl:w-[28rem] lg:mt-10 xl:mt-20">
            <div className="md:text-left w-full">
              <h3
                onMouseEnter={() => setCursorState("sm-hovered")}
                onMouseLeave={() => setCursorState("regular")}
                className="text-lg xl:text-4xl mb-4 font-medium text-right w-full"
              >
                <SimpleTextReveal delay={1.5}>Connect With me</SimpleTextReveal>
              </h3>
              <SocialLinks
                links={socialLinks}
                setCursorState={setCursorState}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default ContactSection;
