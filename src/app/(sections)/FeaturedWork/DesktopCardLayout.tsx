import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiGithubLine } from "react-icons/ri";

const data = [
  {
    slNo: "01",
    title: "Meron - Creative Photo agency",
    image: "",
    link: "https://meron-agency.vercel.app/",
    github: "https://github.com/gvirus21/meron",
    description:
      "Meron is a Fictional photoshoot / videography agency with a sleek aninmated landing page, which is a treat to the eye.",
    containerStyle:
      "absolute top-0 left-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "02",
    title: "V Meet - Your own Video collab platform",
    image: "",
    link: "https://v-meet-theta.vercel.app/",
    github: "https://github.com/gvirus21/v-meet",
    description:
      "V Meet is a video collaboration platform inspired from G-meet, it lets you create, join and schedule a video meeting.",
    containerStyle:
      "absolute top-40 ---xl:top-[32rem] xl:top-[7rem] 2xl:top-24 right-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "03",
    title: "Nepom - Best Tour agency",
    image: "",
    link: "https://nepom-agency.vercel.app/",
    github: "https://github.com/gvirus21/Nepom",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle:
      "absolute top-[30rem] xl:top-[36rem] 2xl:top-[36rem] 3xl:top-[48rem] left-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "04",
    title: "Rust Compiler Game",
    image: "",
    link: "",
    github: "",
    status: "building",
    description:
      "This project is under construction and will be deployed soon :)",
    containerStyle:
      "absolute top-[40rem] xl:top-[46rem] 2xl:top-[41rem] 3xl:top-[54rem] right-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
];

export const DesktopCardsLayout = () => {
  const router = useRouter();
  return (
    <div className="hidden lg:block relative mx-auto h-[80rem] lg:h-[65rem] xl:h-[75rem] 2xl:h-[75rem] 3xl:h-[92rem] w-11/12 mt-40">
      {data.map((project) => (
        <div
          key={project.slNo}
          onClick={() => router.push(project.link)}
          className={cn(project.containerStyle, "cursor-pointer")}
        >
          <div className="flex justify-between items-center text-xl font-medium">
            <p>{project.slNo}</p>
            <p>{project.title}</p>
          </div>
          <div className={project.imageStyle}>{/* image should be here */}</div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <div className="flex flex-row justify-between items-start ">
              <p className="text-sm w-11/12">{project.description}</p>

              {project?.status ? (
                <></>
              ) : (
                <Link href={project.github}>
                  <RiGithubLine size={20} className="mt-1" />
                </Link>
              )}
            </div>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopCardsLayout;
