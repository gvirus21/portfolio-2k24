import type { Metadata } from "next";
import Navbar from "@/app/(sections)/Navbar";
import Image from "next/image";
import Providers from "./providers";
import localFont from "next/font/local";
import Cursor from "@/components/Cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav kumar",
};

const Catalunya = localFont({
  variable: "--font-catalunya",
  src: [
    {
      path: "../../public/fonts/catalunya.ttf",
      weight: "400",
    },
  ],
});

const Hauora = localFont({
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
        className={`${Hauora.variable} ${Catalunya.variable} font-hauora bg-[#d8d8d8ff] `}
      >
        {/* grainy overlay */}
        <Image
          src={"/texture/grainy.svg"}
          height={1000}
          width={2000}
          alt="grainy-bg"
          className="h-screen w-screen fixed inset-0 pointer-events-none object-cover"
        />
        <Providers>
          <Navbar />
          {children}
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
