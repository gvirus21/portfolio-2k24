interface Props {
  timeline: gsap.core.Timeline | null;
}

const ContactSection = ({ timeline }: Props) => {
  return (
  <div className="h-[30vh] lg:w-10/12 max-w-[140rem] mx-auto mt-0 md:mt-[5rem] lg:pt-[4rem] mb-10">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mx-auto">
        <div className="flex flex-col w-11/12 md:w-5/6 ">
          <h2 className="text-3xl md:text-5xl lg:text-7xl">Contact Me</h2>
          <p className="my-4  w-[20rem] xl:w-full">
            I WOULD LOVE TO HEAR FROM YOU. LET&apos;S WORK — TOGETHER.
          </p>

          <button className="h-[3rem] sm:h-[3rem] w-[8rem] sm:w-[10rem] mt-3 lg:mt-5 text-black bg-white rounded-full">
            email me
          </button>
        </div>

        <div className="hidden lg:flex justify-between lg:w-[26rem] xl:w-[22rem] mt-10">
          <div className="md:text-left">
            <h3 className="text-xl mb-4 font-medium">Social</h3>
            <ul className="text-sm">
              <li className="mb-2">X / Twitter</li>
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Github</li>
            </ul>
          </div>

          <div className="lg:text-left">
            <h3 className="text-xl mb-4 font-medium">Contact Details</h3>
            <ul className="text-sm">
              <li className="mb-2">contact@mail.co</li>
              <li className="mb-2">9249894413</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
