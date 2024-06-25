"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface Props {
  children: React.ReactNode;
}

const options = {
  lerp: 0.05,
  duration: 1.5,
  smoothTouch: true
};

function Providers({ children }: Props) {
  return (
    <ReactLenis options={options} root>
      {children}
    </ReactLenis>
  );
}

export default Providers;
