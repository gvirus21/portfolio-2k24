import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useCursorState from "@/store/useCursorState";
import { Link as RsLink } from "react-scroll";

export const InfiniteScrollButton = () => {
  const infiniteScrollButtonRef = useRef(null);
  const { setCursorState, setCursorText } = useCursorState();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.7 } });

    tl.to(
      infiniteScrollButtonRef.current,
      {
        opacity: 1,
        marginLeft: 0,
        marginRight: 0,
        ease: "power1.out",
      },
      1.5 //delay
    );
  }, []);

  return (
    <RsLink
      to="contact-section"
      smooth="easeInOutQuint"
      delay={40}
      duration={4000}
    >
      <div
        ref={infiniteScrollButtonRef}
        onMouseEnter={() => {
          setCursorState("sm-hovered");
          setCursorText("Contact Now");
        }}
        onMouseLeave={() => {
          setCursorState("regular");
          setCursorText("");
        }}
        className="flex justify-start items-center py-1 sm:h-10 md:h-12 w-[10rem] md:w-[12rem] xl:w-[15rem] border-2 border-black rounded-full mt-9 sm:mt-10 lg:mt-12 2xl:mt-20 3xl:mt-32 overflow-hidden opacity-0 ml-10 -mr-10"
      >
        <div className="group md:text-sm xl:text-base font-hauora text-nowrap text-left whitespace-nowrap cursor-pointer">
          <span className="group-hover:pause animate-loopL inline-block">
            Open For Work - Contact Now -&nbsp;
          </span>
          <span className="group-hover:pause animate-loopL inline-block">
            Open For Work - Contact Now -&nbsp;
          </span>
        </div>
      </div>
    </RsLink>
  );
};

export default InfiniteScrollButton;
