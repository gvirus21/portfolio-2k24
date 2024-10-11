import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiGithubLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { Projects } from "./projects";

export const MobileCardsLayout = () => {
  const container = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.5], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 0.5], [100, -100]);
  const y4 = useTransform(scrollYProgress, [0, 0.5], [100, -100]);

  const yValues = [y1, y2, y3, y4];

  const projects = Projects.map((project, index) => {
    return {
      ...project,
      parallax: yValues[index],
    };
  });

  return (
    <motion.div
      ref={container}
      className="flex lg:hidden flex-col justify-between items-center mx-auto mt-[5rem] max-w-[40rem] font-hauora"
    >
      {projects.map((project) => (
        <motion.div
          key={project.slNo}
          style={{
            y: project.parallax,
          }}
          className="w-full my-5"
          onClick={() => router.push(project.link)}
        >
          <div className="flex justify-between items-center text-lg sm:text-xl font-medium">
            <p>{project.slNo}</p>
            <p className="max-w-[80%]">{project.title}</p>
          </div>
          <div className="flex justify-center items-center aspect-[8/5] w-full my-3">
            <Image
              className="w-full aspect-video"
              src={project.image}
              height={700}
              width={800}
              alt="work-image"
            />
          </div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm w-10/12">{project.description}</p>
              {project?.status ? (
                <></>
              ) : (
                <Link
                  href={project.github}
                  className="mt-1 z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <RiGithubLine size={24} />
                </Link>
              )}
            </div>
          </div>
          <div className="h-[1px] w-full bg-black my-4" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileCardsLayout;
