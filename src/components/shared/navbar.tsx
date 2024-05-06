import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 z-50 border-b border-b-secondary">
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
        <Link
          href="https://github.com/robiuzzaman4/hookstore"
          target="_blank"
          className="font-medium hover:underline"
        >
          Github
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
