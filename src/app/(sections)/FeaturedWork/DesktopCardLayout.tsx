import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiGithubLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { Projects } from "./projects";
import { cn } from "@/lib/utils";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";

export const DesktopCardsLayout = () => {
  const container = useRef(null);
  const router = useRouter();
  const { setCursorState, setCursorText } = useCursorState();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const yValues = [y1, y2, y3, y4];

  const projects = Projects.map((project, index) => {
    return {
      ...project,
      parallax: yValues[index],
    };
  });

  return (
    <div
      ref={container}
      className="hidden lg:block relative mx-auto h-[80rem] lg:h-[65rem] xl:h-[75rem] 2xl:h-[75rem] 3xl:h-[92rem] w-[95%] mt-[26rem] font-hauora"
    >
      {projects.map((project) => (
        <motion.div
          key={project.slNo}
          style={{
            y: project.parallax,
          }}
          onMouseEnter={() => {
            if (project.slNo !== "04") {
              setCursorState("md-hovered");
              setCursorText("checkout project");
            } else {
              setCursorText("coming soon");
            }
          }}
          onMouseLeave={() => {
            setCursorState("regular");
            setCursorText("");
          }}
          onClick={() => router.push(project.link)}
          className={cn(project.desktopContainerStyle, "cursor-pointer")}
        >
          <div className="flex justify-between items-center text-xl font-medium">
            <p>{project.slNo}</p>
            <p className="max-w-[80%]">{project.title}</p>
          </div>
          <div
            className={cn(
              project.desktopImageStyle,
              "flex justify-center items-center shadow-md rounded-2xl"
            )}
          >
            <Image
              src={project.image}
              height={700}
              width={1000}
              className="object-contain"
              alt="project"
            />
          </div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <div className="flex flex-row justify-between items-start">
              <p className="text-sm w-11/12">
                <TextReveal animationDelay={0.01}>
                  {project.description}
                </TextReveal>
              </p>
              {project?.status ? (
                <></>
              ) : (
                <Link
                  href={project.github}
                  className="mt-1 z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onMouseEnter={() => {
                    setCursorState("sm-hovered");
                    setCursorText("source code");
                  }}
                  onMouseLeave={() => {
                    setCursorState("regular");
                    setCursorText("");
                  }}
                >
                  <RiGithubLine size={20} />
                </Link>
              )}
            </div>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DesktopCardsLayout;
