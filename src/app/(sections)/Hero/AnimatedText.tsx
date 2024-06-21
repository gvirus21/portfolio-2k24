import { cn } from "@/lib/utils";

const AnimatedText = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn(containerClassName)}>
      <h1 className={cn(className, "large-animated-text")}>{children}</h1>
    </div>
  );
};

export default AnimatedText;
