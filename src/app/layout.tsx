import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <head>
        <link rel="icon" type="image/png" href="/hook-store.png" />
      </head>
      <body className={`${GeistSans.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
