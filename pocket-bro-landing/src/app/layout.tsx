import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechBro Tamagotchi | Startup Life Simulator",
  description:
    "Nurture your Tech Bro/Gal from garage to unicorn. A Tamagotchi-style startup life simulator with retro pixel art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        {children}
      </body>
    </html>
  );
}
