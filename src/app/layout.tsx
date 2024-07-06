import type { Metadata } from "next";
import Navbar from "@/app/(sections)/Navbar";
import Image from "next/image";
import Providers from "./providers";
import localFont from "next/font/local";
import Cursor from "@/components/Cursor";
import "./globals.css";

import { Quattrocento, Send_Flowers } from "next/font/google";

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quattrocento",
});

const sendFlowers = Send_Flowers({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-send-flowers",
});

export const metadata: Metadata = {
  title: "Gourav kumar",
};

const hauora = localFont({
  variable: "--font-hauora",
  src: [
    {
      path: "../../public/fonts/Hauora-ExtraLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Hauora-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hauora-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hauora-Medium.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Hauora-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hauora.variable} ${quattrocento.variable} ${sendFlowers.variable} font-quattrocento bg-[#d8d8d8ff] `}
      >
        {/* grainy overlay */}
        <Image
          src={"/texture/grainy.svg"}
          height={1000}
          width={2000}
          alt="grainy-bg"
          className="fixed inset-0 h-screen w-screen pointer-events-none object-cover z-[0]"
        />
        <div className="fixed inset-0 h-screen w-screen primary-graident mix-blend-darken" />
        <Providers>
          <Navbar />
          {children}
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
