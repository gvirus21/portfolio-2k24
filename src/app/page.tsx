"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import Loader from "@/components/Loader";
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
    <main className="h-screen w-screen max-w-full px-5 bg-white text-black">
      {/* {loaderFinished ? (
        <MainPage timeline={timeline} />
      ) : (
        <Loader timeline={timeline} />
      )} */}
      <MainPage timeline={timeline} />
    </main>
  );
}


// TODO:

// add nav links scroll to feature.
// add images.
// add hover animations to the navlink
// add all other links and thier animations
// add buttons interactions animations.
// update fonts


// update text content
// add text animation / scroll animations

// add works section animation.