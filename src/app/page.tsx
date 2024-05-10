"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "@/components/Loader";
import MainPage from "./main-page";

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
    <main className="h-screen w-screen px-5">
      <MainPage timeline={timeline} />
      {/* {loaderFinished ? (
        <MainPage timeline={timeline} />
      ) : (
        <Loader timeline={timeline} />
      )} */}
    </main>
  );
}
