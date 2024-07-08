import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "group relative text-[1.5rem] text-black h-6 tracking-wider uppercase leading-6 overflow-hidden cursor-pointer",
        className
      )}
    >
      <span className="inline-block transition duration-500 ease-in-out group-hover:translate-y-[-300%]">
        {children}
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 inline-block transition duration-500 ease-in-out translate-y-[200%] rotate-12 group-hover:translate-y-0 text-base group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};

export default AnimatedButton;
