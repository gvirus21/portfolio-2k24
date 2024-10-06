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
  <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
    <div className="flex justify-between items-center p-3 h-12 w-28 rounded-full bg-white/45">
      <div className="flex justify-center items-center h-6 w-6 rounded-full bg-white">
        <Icon className="text-black h-3 w-3" />
      </div>
      <p className="text-sm"> Step {stepNumber} </p>
    </div>
    <div className="mt-6">
      <h3 className="text-xl lg:text-2xl font-medium">{title}</h3>
      <p className="mt-4 text-sm lg:text-base">
        {description}
      </p>
    </div>
  </div>
);

export const WorkProcess = () => {
  const { setCursorState } = useCursorState();
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full px-4 lg:px-8 xl:px-16 pt-16"
    >
      <h3
        className="text-4xl md:text-5xl lg:text-7xl font-medium capitalize w-full text-center lg:text-right"
        onMouseEnter={() => setCursorState("lg-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        <SimpleTextReveal delay={0.5}>My Work Process</SimpleTextReveal>
      </h3>
      <div className="flex flex-col lg:flex-row justify-between items-start sm:w-10/12 md:w-8/12 lg:w-full max-w-[100rem] mx-auto mt-10 lg:mt-20 bg-white/20 rounded-xl py-6 lg:py-10 px-6 lg:px-10 shadow-xl">
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
