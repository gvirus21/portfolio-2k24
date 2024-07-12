"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainPage from "./main-page";
import Loader from "@/components/Loader";

export default function Home() {
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);
  const [loaderFinished, setLoaderFinished] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });

    setTimeline(tl);
  }, []);

  return (
    <main className="h-screen w-screen max-w-full px-5 text-black">
      <Loader timeline={timeline} />
      {/* {loaderFinished ? (
        <MainPage timeline={timeline} />
      ) : (
        <Loader timeline={timeline} />
      )} */}
      {/* <MainPage timeline={timeline} /> */}
    </main>
  );
}
