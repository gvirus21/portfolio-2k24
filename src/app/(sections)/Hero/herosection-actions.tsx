import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import LinkHoverAnimation from "@/components/ui/LinkHoverAnimation";
import Link from "next/link";
import { Link as RsLink } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useCursorState from "@/store/useCursorState";

const CALENDLY_LINK =
  "https://calendly.com/gouravkumar21-dev/1-x-1-with-gourav";

const HeroSectionActions = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(
      ".action-buttons-container",
      {
        bottom: 20,
        opacity: 0.55,
        ease: "power1.out",
      },
      1
    );
  }, []);

  return (
    <>
      <MobileVersion />
      <DesktopVersion />
    </>
  );
};

const DesktopVersion = () => {
  const { setCursorState } = useCursorState();

  return (
    <div className="action-buttons-container hidden sm:flex absolute bottom-0 justify-between items-center h-20 w-full z-50 opacity-0">
      <div className="relative w-full">
        <LinkHoverAnimation className="left-0 xl:text-xl tracking-wider">
          <RsLink
            to="work-section"
            smooth="easeInOutQuart"
            delay={40}
            offset={0}
            duration={2500}
          >
            <p
              onMouseEnter={() => setCursorState("sm-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="flex justify-between items-center cursor-pointer"
            >
              SEE MY WORK <ArrowIcon className="h-8 xl:h-10 w-8 xl:w-14" />
            </p>
          </RsLink>
        </LinkHoverAnimation>
        <LinkHoverAnimation
          href={CALENDLY_LINK}
          className="right-0 xl:text-xl tracking-wider"
        >
          <p
            onMouseEnter={() => setCursorState("sm-hovered")}
            onMouseLeave={() => setCursorState("regular")}
            className="flex justify-between items-center cursor-pointer"
          >
            BOOK A FREE CALL <ArrowIcon className="h-8 xl:h-10 w-8 xl:w-14" />
          </p>
        </LinkHoverAnimation>
      </div>
    </div>
  );
};

const MobileVersion = () => {
  return (
    <div className="action-buttons-container absolute bottom-0 sm:hidden flex flex-col justify-between items-center w-full text-sm mb-5 opacity-0">
      <RsLink
        to="work-section"
        smooth="easeInOutQuart"
        delay={40}
        offset={0}
        duration={2500}
        className="flex justify-between items-center h-12 w-full border border-black px-4 my-2 "
      >
        SEE MY WORK <ArrowIcon className="h-8 w-10" />
      </RsLink>
      <Link
        href={CALENDLY_LINK}
        className="flex justify-between items-center h-12 w-full border border-black px-4 my-2"
      >
        BOOK A FREE CALL <ArrowIcon className="h-8 w-10" />
      </Link>
    </div>
  );
};

export default HeroSectionActions;
