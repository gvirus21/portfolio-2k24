import type { Metadata } from "next";
import Navbar from "@/app/(sections)/Navbar";
import Providers from "./providers";
import localFont from "next/font/local";
import Cursor from "@/components/Cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav kumar",
};

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

const QuantaGroteskPro = localFont({
  variable: "--font-quanta-grotesk",
  src: [
    {
      path: "../../public/fonts/QuantaGroteskPro-LightItalic.ttf",
      weight: "600",
      style: "semibold",
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
        className={`${QuantaGroteskPro.variable} ${Hauora.variable} bg-white font-hauora`}
      >
        <Providers>
          <Navbar />
          {children}
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
