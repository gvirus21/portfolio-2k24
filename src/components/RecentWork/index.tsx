interface Props {
  timeline: gsap.core.Timeline | null;
}

const RecentWorkSection = ({ timeline }: Props) => {
  return (
    <div className="relative left-[50%] -translate-x-[50%] flex justify-between min-h-[90vh] w-11/12 max-w-[140rem] mt-[14rem]">
      <h2 className="absolute left-0 text-8xl">Recent Work</h2>
      <div className="relative mx-auto h-[80rem] w-11/12 my-60 -bg-amber-500">
        
        {/* Cards */}
        <div className="absolute top-0 left-0 h-[30rem] w-[32rem] -bg-red-500">
          <div className="flex justify-between items-center text-xl font-medium">
            <p>01</p>
            <p>Hello World!</p>
          </div>
          <div className="h-[20rem] w-full bg-slate-600 my-3"></div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <p className="text-sm w-11/12">
              Project Descrioption, adipisicing elit. Voluptatibus ex sapiente
              omnis consequuntur.
            </p>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </div>

        <div className="absolute top-0 right-40 h-[34rem] w-[50rem] -bg-red-500">
          <div className="flex justify-between items-center text-xl font-medium">
            <p>02</p>
            <p>Hello World!</p>
          </div>
          <div className="h-[30rem] w-full bg-slate-600 my-3"></div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <p className="text-sm w-11/12">
              Project Descrioption, adipisicing elit. Voluptatibus ex sapiente
              omnis consequuntur.
            </p>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[38rem] w-[40rem] -bg-red-500">
          <div className="flex justify-between items-center text-xl font-medium">
            <p>03</p>
            <p>Hello World!</p>
          </div>
          <div className="h-[24rem] w-full bg-slate-600 my-3"></div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <p className="text-sm w-11/12">
              Project Descrioption, adipisicing elit. Voluptatibus ex sapiente
              omnis consequuntur.
            </p>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </div>

        <div className="absolute bottom-0 right-40 h-[38rem] w-[40rem] -bg-red-500">
          <div className="flex justify-between items-center text-xl font-medium">
            <p>04</p>
            <p>Hello World!</p>
          </div>
          <div className="h-[24rem] w-full bg-slate-600 my-3"></div>
          <div>
            <div className="h-[1px] w-full bg-black mt-6 mb-4" />
            <p className="text-sm w-11/12">
              Project Descrioption, adipisicing elit. Voluptatibus ex sapiente
              omnis consequuntur.
            </p>
            <div className="h-[1px] w-full bg-black my-4" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default RecentWorkSection;
