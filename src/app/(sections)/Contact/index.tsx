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
import { ContactHeader } from "./Heading";
import SocialLink, { SocialLinkProps } from "./SocialLink";

interface SocialLinksProps {
  links: SocialLinkProps[];
  setCursorState: (state: CursorState) => void;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, setCursorState }) => (
  <ul className="flex flex-col justify-between items-end lg:flex-row lg:items-center text-[12px] md:text-xs lg:text-sm sm:mt-6 md:mt-10 mr-5 lg:mr-0">
    {links.map((link) => (
      <SocialLink key={link.label} {...link} setCursorState={setCursorState} />
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
      setCursorState,
    },
    {
      href: "https://instagram.com/gvirus21",
      icon: RiInstagramLine,
      label: "Instagram",
      setCursorState,
    },
    {
      href: "https://www.linkedin.com/in/gouravkumar-21/",
      icon: RiLinkedinBoxFill,
      label: "LinkedIn",
      setCursorState,
    },
    {
      href: "https://github.com/gvirus21",
      icon: RiGithubLine,
      label: "Github",
      setCursorState,
    },
  ];

  return (
    <Element name="contact-section">
      <section className="w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem] mx-auto py-10 pb-20 sm:pt-20 sm:pb-20 2xl:pt-32 2xl:pb-32 mt-20 sm:mt-5">
        <motion.div className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto">
          <div className="flex flex-col w-full md:w-5/6">
            <div className="flex flex-col items-start justify-start">
              <ContactHeader />
              <p
                onMouseEnter={() => setCursorState("md-hovered")}
                onMouseLeave={() => setCursorState("regular")}
                className="text-sm lg:text-base xl:text-xl max-w-[15rem] sm:max-w-[30rem] mx-auto sm:mx-0 w-full sm:w-[18rem] md:w-[20rem] xl:w-full text-center sm:text-left mt-2 sm:mt-4 md:mt-8 xl:mt-4"
              >
                <SimpleTextReveal delay={1}>
                  I would love to hear from you, let&apos;s work — together.
                </SimpleTextReveal>
              </p>
            </div>
            <EmailButton setCursorState={setCursorState} />
          </div>

          <div className="hidden sm:flex text-sm lg:text-base justify-between w-[30rem] lg:w-[40rem] xl:w-[28rem] sm:mt-4 lg:mt-10 xl:mt-20">
            <div className="md:text-left w-full">
              <h3
                onMouseEnter={() => setCursorState("sm-hovered")}
                onMouseLeave={() => setCursorState("regular")}
                className="text-[1.6rem] md:text-3xl mb-4 font-medium text-right w-full"
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
