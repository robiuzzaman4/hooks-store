"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="w-full py-4 z-50 border-b border-b-secondary bg-background/50 backdrop-blur-lg sticky top-0">
      <Container className="w-full flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icon.png"
            alt="logo"
            height={1080}
            width={1080}
            className="h-8 w-8 shadow-sm rounded-md"
          />
          <span className="text-xl font-semibold">Hook Store</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/docs"
            className={cn("text-sm text-muted-foreground hover:underline", {
              "text-foreground": pathname === "/docs",
            })}
          >
            Docs
          </Link>
          <Link
            href="https://github.com/robiuzzaman4/hookstore"
            target="_blank"
            className="text-sm text-muted-foreground hover:underline"
          >
            Github
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
