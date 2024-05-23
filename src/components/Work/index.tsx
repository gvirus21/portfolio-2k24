interface Props {
  timeline: gsap.core.Timeline | null;
}

const WorkSection = ({ timeline }: Props) => {
  return (
    <div className="relative left-[50%] -translate-x-[50%] flex justify-between h-[90vh] w-11/12 max-w-[140rem] mt-20 lg:mt-[14rem]">
      <h2 className="absolute left-0 lg:left-auto lg:right-0 text-3xl md:text-5xl lg:text-8xl text-left">
        My Work
      </h2>

      <div className="relative flex flex-col lg:flex-row justify-between items-center h-[45rem] sm:h-[40rem] lg:h-[70rem] mx-auto w-10/12">
        <div className="h-[15rem] w-full mt-16" />
        <div className="w-full max-w-[20rem] bg-blue-400">
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            PROJECT DEMO - Schedule.
          </h3>
          <h4 className="text-lg md:text-xl lg:text-4xl my-4 lg:my-10 font-semibold">
            A One line project description.
          </h4>

          <ul className="flex flex-col justify-between lg:h-[16rem] lg:w-[40rem] text-base lg:text-xl list-disc lg:mt-28">
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quod, qui molestias ullam omnis repudiandae enim amet modi
              recusandae magnam.
            </li>
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quod, qui molestias ullam omnis repudiandae enim amet modi
              recusandae magnam.
            </li>
            <li className="my-2">
              Repudiandae enim amet modi recusandae magnam.
            </li>
          </ul>
        </div>

        <div className="absolute top-16 lg:right-20 h-[12rem] lg:h-[50rem] aspect-[14/9] bg-white/50 -z-10"></div>
      </div>
    </div>
  );
};

export default WorkSection;
