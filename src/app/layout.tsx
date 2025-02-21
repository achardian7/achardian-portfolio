import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorHighlighter from "@/components/cursor-highlighter";
import { cn } from "@/lib/cn";
import { ToastContainer } from "react-toastify";

const font = Inter({
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
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-emerald-600/10 scrollbar-thumb-emerald-600"
    >
      <body className={cn("bg-[#001233]", font.className)}>
        {children}
        <CursorHighlighter />
        <ToastContainer />
      </body>
    </html>
  );
}
