import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiGithubLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { Projects } from "./projects";
import { cn } from "@/lib/utils";

export const DesktopCardsLayout = () => {
  const container = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -700]);

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
      className="hidden lg:block relative mx-auto h-[80rem] lg:h-[65rem] xl:h-[75rem] 2xl:h-[75rem] 3xl:h-[92rem] w-[95%] mt-[30rem] font-hauora"
    >
      {projects.map((project) => (
        <motion.div
          key={project.slNo}
          style={{
            y: project.parallax,
          }}
          onClick={() => router.push(project.link)}
          className={cn(project.desktopContainerStyle, "cursor-pointer")}
        >
          <div className="flex justify-between items-center text-xl font-medium">
            <p>{project.slNo}</p>
            <p>{project.title}</p>
          </div>
          <div className={cn(project.desktopImageStyle, "shadow-md")}>
            {/* image should be here */}
            {/* <Image
              src={project.image}
              fill
              className="object-cover"
              alt="project"
            /> */}
          </div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <div className="flex flex-row justify-between items-start">
              <p className="text-sm w-11/12">{project.description}</p>
              {project?.status ? (
                <></>
              ) : (
                <Link href={project.github} className="mt-1 z-50">
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
