interface Props {
  timeline: gsap.core.Timeline | null;
}

const WorkSection = ({ timeline }: Props) => {
  return (
    <div className="relative left-[50%] -translate-x-[50%] flex justify-between h-[90vh] w-11/12 max-w-[140rem] mt-[14rem]">
      <h2 className="absolute right-0 text-8xl">My Work</h2>

      <div className="relative flex justify-between items-center h-[70rem] mx-auto w-10/12">
        <div>
          <h3 className="text-8xl font-medium">PROJECT DEMO - Schedule.</h3>
          <h4 className="text-4xl my-10">A One line project description.</h4>

          <ul className="flex flex-col justify-between h-[16rem] w-[40rem] text-xl list-disc mt-28">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quod, qui molestias ullam omnis repudiandae enim amet modi
              recusandae magnam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quod, qui molestias ullam omnis repudiandae enim amet modi
              recusandae magnam.
            </li>
            <li>
              Repudiandae enim amet modi recusandae magnam.
            </li>
          </ul>
        </div>

        <div className="absolute right-0 h-[50rem] min-w-[75rem] bg-white/50 -z-10"></div>
      </div>
    </div>
  );
};

export default WorkSection;
