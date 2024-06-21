import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const LinkHoverAnimation = ({
  children,
  href = "",
  className,
}: Props) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isAnimationStarting, setIsAnimationStarting] = useState(false);

  useEffect(() => {
    console.log("is linkhovered: ", isLinkHovered);
    console.log("is animation starting: ", isAnimationStarting);
  }, [isLinkHovered, isAnimationStarting]);

  return (
    <div
      className={cn("absolute bottom-0", className)}
      onMouseEnter={() => {
        setIsAnimationStarting(true);
        setIsLinkHovered(true);
      }}
      onMouseLeave={() => {
        setIsAnimationStarting(false);
        setIsLinkHovered(false);
      }}
    >
      <Link href={href}>{children}</Link>

      <div className="flex flex-col pt-2">
        <div className="relative w-full">
          <div
            className={cn(
              "absolute right-0 h-[2px] transition-all duration-500 ease-out bg-black",
              isAnimationStarting ? "delay-0" : "delay-200",
              isLinkHovered ? "w-0" : "w-full"
            )}
          />
        </div>
        <div className="relative w-full">
          <div
            className={cn(
              "absolute left-0 h-[2px] transition-all duration-500 delay-150 ease-out text-right bg-black",
              isAnimationStarting ? "delay-200" : "delay-0",
              isLinkHovered ? "w-full" : "w-0"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkHoverAnimation;
