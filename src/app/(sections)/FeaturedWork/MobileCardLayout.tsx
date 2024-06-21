import { cn } from "@/lib/utils";

const data = [
  {
    slNo: "01",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
  },
  {
    slNo: "02",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
  },
  {
    slNo: "03",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
  },
  {
    slNo: "04",
    title: "Hello world",
    image: "",
    description:
      "Project Descrioption, adipisicing elit. Voluptatibus ex sapiente omnis consequuntur.",
  },
];

export const MobileCardsLayout = () => {
  return (
    <div className="flex lg:hidden flex-col justify-between items-center mx-auto my-20">
      {/* Cards */}
      {data.map((item) => (
        <div key={item.slNo} className="w-full my-5">
          <div className="flex justify-between items-center text-lg sm:text-xl font-medium">
            <p>{item.slNo}</p>
            <p>{item.title}</p>
          </div>
          <div className="aspect-[8/5] w-full bg-slate-600 my-3">
            {/* image should be here */}
          </div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <p className="text-sm w-11/12">{item.description}</p>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCardsLayout;
