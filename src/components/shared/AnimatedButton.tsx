import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const AnimatedButton: FC<Props> = ({ children }) => {
  return (
    <div className="group relative text-[1.5rem] h-6 tracking-wider uppercase leading-6 overflow-hidden cursor-pointer">
      <span className="inline-block transition duration-500 ease-in-out group-hover:translate-y-[-300%]">
        {children}
      </span>
      <span className="absolute left-0 transition duration-500 ease-in-out translate-y-[200%] rotate-12 group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};

export default AnimatedButton;
