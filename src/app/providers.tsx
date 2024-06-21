"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default Providers;
