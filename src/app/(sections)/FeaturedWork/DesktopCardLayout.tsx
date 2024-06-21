const data = [
  {
    slNo: "01",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle:
      "absolute top-0 left-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "02",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle:
      "absolute top-40 xl:top-[32rem] xl:top-[7rem] 2xl:top-20 right-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "03",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle:
      "absolute top-[30rem] xl:top-[36rem] 2xl:top-[36rem] 3xl:top-[48rem] left-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "04",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle:
      "absolute top-[40rem] xl:top-[46rem] 2xl:top-[41rem] 3xl:top-[53rem] right-0 w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[48rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
];

export const DesktopCardsLayout = () => {
  return (
    <div className="hidden lg:block relative mx-auto h-[80rem] lg:h-[65rem] xl:h-[75rem] 2xl:h-[75rem] 3xl:h-[92rem] w-11/12 mt-32">
      {data.map((project) => (
        <div key={project.slNo} className={project.containerStyle}>
          <div className="flex justify-between items-center text-xl font-medium">
            <p>{project.slNo}</p>
            <p>{project.title}</p>
          </div>
          <div className={project.imageStyle}>{/* image should be here */}</div>
          <div>
            <div className="h-[1px] w-full bg-white/55 mt-6 mb-4" />
            <p className="text-sm w-11/12">{project.description}</p>
            <div className="h-[1px] w-full bg-white/55 my-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopCardsLayout;
