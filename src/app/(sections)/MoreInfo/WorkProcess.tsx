import useCursorState from "@/store/useCursorState";
import { FaPaintRoller } from "react-icons/fa6";
import { MdBuild } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";
import { SimpleTextReveal } from "@/components/helpers";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const containerVariants = {
  initial: {
    x: 40,
    opacity: 0,
  },
  animate: {
    x: 0,
    delay: 0.5,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

interface StepProps {
  icon: IconType; 
  stepNumber: number;
  title: string;
  description: string;
}

const Step = ({ icon: Icon, stepNumber, title, description }: StepProps) => (
  <div className="mb-8 md:mb-0 xl:mr-3">
    <div className="flex justify-between items-center p-3 md:p-4 h-10 md:h-12 w-24 md:w-28 rounded-full bg-white/45">
      <div className="flex justify-center items-center h-5 md:h-6 w-5 md:w-6 rounded-full bg-white">
        <Icon className="text-black h-2.5 md:h-3 w-2.5 md:w-3" />
      </div>
      <p className="text-sm md:text-base xl:text-sm 2xl:text-sm 3xl:text-base"> Step {stepNumber} </p>
    </div>
    <div className="pl-1 mt-4 md:mt-6">
      <h3 className="text-xl xl:text-2xl 3xl:text-3xl font-medium">{title}</h3>
      <p className="w-full md:w-[24rem] xl:w-[20rem] 2xl:w-[16rem] 3xl:w-[20rem] mt-2 md:mt-4 text-sm md:text-base xl:text-sm 2xl:text-base 3xl:text-base tracking-wide">
        {description}
      </p>
    </div>
  </div>
);

const WorkProcess = () => {
  const { setCursorState } = useCursorState();
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="h-full w-full md:w-10/12 lg:w-7/12 xl:w-full 2xl:w-[68%] my-20 px-4 md:pr-0"
    >
      <h3
        className="text-3xl lg:text-4xl 2xl:text-5xl mx-auto text-right font-medium cursor-pointer"
        onMouseEnter={() => setCursorState("lg-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        <SimpleTextReveal delay={0.5}>My Work Process</SimpleTextReveal>
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-start mt-10 md:mt-20 bg-white/20 rounded-xl py-6 md:py-10 px-6 md:px-10 shadow-xl">
        <Step
          icon={FaPaintRoller}
          stepNumber={1}
          title="Design the Needs"
          description="I start by understanding your project requirements and goals. This involves in-depth discussions, research, and creating wireframes to visualize the solution."
        />
        <Step
          icon={MdBuild}
          stepNumber={2}
          title="Develop The Solution"
          description="Using modern technologies like React and Next.js, I build a robust, scalable solution. This phase includes coding, testing, and iterative improvements based on feedback."
        />
        <Step
          icon={PiHandshake}
          stepNumber={3}
          title="Review & Ship"
          description="The final step involves a thorough review of the project, making any necessary refinements. Once approved, I ensure smooth deployment and provide ongoing support as needed."
        />
      </div>
    </motion.div>
  );
};

export default WorkProcess;
