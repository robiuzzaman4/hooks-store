import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Hook Store",
  description: "A Collection of Custom React Hooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <body className={`${GeistSans.variable} min-h-screen font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
