import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import CursorHighlighter from "@/components/cursor-highlighter";
import { cn } from "@/lib/cn";

const font = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achardian Portfolio",
  description: "Muchammad Ardiansyah Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-[#001233]", font.className)}>
        {children}
        <CursorHighlighter />
      </body>
    </html>
  );
}
