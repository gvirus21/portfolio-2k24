"use client"

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  //   const lenis = useLenis(({ scroll }) => {
  //     // called every scroll
  //   })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}


export default Providers