import AnimatedText from "./AnimatedText";

const Paragraph = () => (
  <div className="absolute top-auto xl:top-[55%] 3xl:top-[58%] mt-4 sm:mt-10 lg:mt-0 xl:mt-0 -right-0 w-full md:w-[20rem] xl:w-[19rem] 2xl:w-[23rem] text-xl xl:text-xl 2xl:text-2xl tracking-wider xl:tracking-wide leading-8 xl:leading-10 2xl:leading-10 capitalize">
    <AnimatedText containerClassName="my-2 xl:my-0">
      I help businesses build their
    </AnimatedText>
    <AnimatedText containerClassName="my-2 xl:my-0">
      awesome and high converging
    </AnimatedText>
    <AnimatedText containerClassName="my-2 xl:my-0">website.</AnimatedText>
  </div>
);

export default Paragraph;
