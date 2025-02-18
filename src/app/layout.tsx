import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({
  subsets: ["cyrillic"],
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
