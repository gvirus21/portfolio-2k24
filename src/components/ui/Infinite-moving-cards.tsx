"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useCursorState from "@/store/useCursorState";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    profileUrl: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const { setCursorState, setCursorText } = useCursorState();

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        // setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };
    addAnimation();
  }, [direction, speed]);
  // const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          // start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => {
          const getSentences = (text: string) => {
            return text.match(/[^.!?]+[.!?]*/g) || [text];
          };

          const sentences = getSentences(item.quote);

          return (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 px-8 py-6 md:w-[540px] glassmorphism"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_20px)] w-[calc(100%_+_4px)]"
                ></div>
                <div>
                  {sentences.map((sentence, index) => (
                    <span
                      key={index}
                      onMouseEnter={() => setCursorState("sm-hovered")}
                      onMouseLeave={() => setCursorState("regular")}
                      className="relative z-20 leading-[1.5] text-sm text-black capitalize font-normal block mb-3"
                    >
                      {sentence}
                    </span>
                  ))}
                </div>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <Link
                      onMouseEnter={() => {
                        setCursorState("sm-hovered");
                        setCursorText("visit profile");
                      }}
                      onMouseLeave={() => {
                        setCursorState("regular");
                        setCursorText("");
                      }}
                      className="underline-link-hover-effect inline-block max-w-[12rem]"
                      href={item.profileUrl}
                    >
                      <span className="text-sm leading-[1.6] text-black font-normal italic">
                        {item.name}
                      </span>
                    </Link>
                    <span
                      onMouseEnter={() => setCursorState("sm-hovered")}
                      onMouseLeave={() => setCursorState("regular")}
                      className="text-sm leading-[1.6] text-black font-normal italic"
                    >
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
