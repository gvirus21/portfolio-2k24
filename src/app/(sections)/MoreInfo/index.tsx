import WhyChooseMe from "./WhyChooseMe";
import WorkProcess from "./WorkProcess";

export const MoreInfoSection = () => {
  return (
    <div className="flex flex-col 2xl:flex-row justify-between items-center xl:min-h-screen 2xl:min-h-[50vh] 3xl:min-h-[30vh] w-screen max-w-full mt-28 xs:mt-6 sm:mt-36 2xl:mt-20 mb-20 lg:px-20">
      <WhyChooseMe />
    </div>
  );
};

export default MoreInfoSection;
