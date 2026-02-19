import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiny TechBro | Startup Life Simulator",
  description:
    "Nurture your Tech Bro/Gal from garage to unicorn. A startup life simulator with retro pixel art.",
  icons: {
    icon: { url: "/steve_Icon.png", type: "image/png" },
  },
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
