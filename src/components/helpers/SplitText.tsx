import { cn } from "@/lib/utils";

interface Props {
  splitBy?: "letters" | "words";
  children: string;
  wordClassName?: string;
  letterClassName?: string;
}

const SplitText = ({
  children,
  letterClassName,
  wordClassName,
  splitBy = "words",
}: Props) => {
  const words = children.split(" ");
  const letters = children.split("");

  return (
    <span>
      {splitBy === "words"
        ? words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={cn("overflow-hidden inline-block", letterClassName)}
            >
              <span className={cn("relative inline-block", wordClassName)}>
                {word}&nbsp;
              </span>
            </span>
          ))
        : letters.map((letter, i) => {
            return (
              <span
                key={`${letter}-${i}`}
                className={cn("overflow-hidden inline-block", letterClassName)}
              >
                <span>{letter === " " ? "\u00A0" : letter}</span>
              </span>
            );
          })}
    </span>
  );
};

export default SplitText;
