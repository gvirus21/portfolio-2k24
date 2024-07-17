"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const GrainyImageOverlay: React.FC = () => {
  const [browser, setBrowser] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Firefox")) {
      setBrowser("firefox");
    } else if (userAgent.includes("Chrome")) {
      setBrowser("chrome");
    }
  }, []);

  if (browser === "firefox") {
    return (
      <Image
        src="/texture/grainy-firefox.svg"
        height={1000}
        width={2000}
        alt="grainy-bg-firefox"
        className="fixed inset-0 h-screen w-screen pointer-events-none object-cover z-[0]"
      />
    );
  } else if (browser === "chrome") {
    return (
      <Image
        src="/texture/grainy-chrome.svg"
        height={1000}
        width={2000}
        alt="grainy-bg-chrome"
        className="fixed inset-0 h-screen w-screen pointer-events-none object-cover z-[0]"
      />
    );
  } else {
    return null;
  }
};

export default GrainyImageOverlay;
