import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


export const InfiniteScrollButton = () => {
  const infiniteScrollButtonRef = useRef(null);

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
    <div
      ref={infiniteScrollButtonRef}
      className="flex justify-start items-center py-1 sm:h-10 md:h-12 w-[10rem] md:w-[12rem] xl:w-[15rem] border-2 border-black rounded-full mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 3xl:mt-32 overflow-hidden --pl-2 opacity-0 ml-10 -mr-10"
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
  );
};

export default InfiniteScrollButton
