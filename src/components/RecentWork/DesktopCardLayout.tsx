const data = [
  {
    slNo: "01",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle: "absolute top-0 left-0 w-[30rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "02",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle: "absolute top-[32rem] 2xl:top-0 right-0 w-[30rem] 2xl:w-[50rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "03",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle: "absolute top-[66rem] 2xl:top-auto 2xl:bottom-0 left-0 w-[30rem] 2xl:w-[36rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
  {
    slNo: "04",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
    containerStyle:"absolute bottom-0 2xl:bottom-10 right-0 w-[30rem] 2xl:w-[32rem]",
    imageStyle: "w-full aspect-[8/5] bg-slate-600 my-3",
  },
];

export const DesktopCardsLayout = () => {
  return (
    <div className="hidden lg:block relative mx-auto h-[80rem] lg:h-[129rem] 2xl:h-[75rem] w-11/12 lg:max-w-[60rem] 2xl:min-w-[85rem] 2xl:max-w-[100rem] mt-60">
      {/* Cards */}
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
