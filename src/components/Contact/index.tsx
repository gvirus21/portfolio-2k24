interface Props {
  timeline: gsap.core.Timeline | null;
}

const ContactSection = ({ timeline }: Props) => {
  return (
    <div className="relative h-[40vh] w-full max-w-[140rem] mt-[14rem]">
      <div className="flex justify-between w-10/12 mx-auto">
        <div>
          <h2 className="text-7xl">Contact Me</h2>
          <p className="my-4">
            I WOULD LOVE TO HEAR FROM YOU. LET&apos;S WORK — TOGETHER.
          </p>

          <button className="text-white bg-black px-6 py-1 rounded-full mt-5">
            email me
          </button>
        </div>

        <div className="flex justify-between w-[20rem] mt-20">
          <div className="text-left">
            <h3 className="text-xl mb-4 font-medium">Social</h3>
            <ul className="text-sm">
              <li className="mb-2">Twitter</li>
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Github</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl mb-4 font-medium">Contact Details</h3>
            <ul className="text-sm">
              <li className="mb-2">contact@mail.co</li>
              <li className="mb-2">9249894413</li>
            </ul>
          </div>
        </div>

        <p className="absolute bottom-40 -right-20">BACK TO TOP</p>
      </div>
    </div>
  );
};

export default ContactSection;
