import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Hooks Store",
  description: "A list of react custom hooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <body className={`${GeistSans.variable} font-sans min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
