import { CursorState } from "@/store/useCursorState";

interface AnimatedButtonProps {
  className: string;
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  className,
  children,
}) => <button className={className}>{children}</button>;

interface EmailButtonProps {
  setCursorState: (state: CursorState) => void;
}

const EmailButton: React.FC<EmailButtonProps> = ({ setCursorState }) => (
  <a
    onMouseEnter={() => setCursorState("sm-hovered")}
    onMouseLeave={() => setCursorState("regular")}
    href="mailto:gouravkumar21.dev@gmail.com"
  >
    <AnimatedButton className="flex justify-center items-center h-[2.5rem] sm:h-[3rem] w-[10rem] sm:w-[13rem] mt-6 lg:mt-10 text-sm md:text-base text-black border border-black rounded-full capitalize font-hauora mx-auto sm:mx-0">
      Email Me
    </AnimatedButton>
  </a>
);

export default EmailButton;
