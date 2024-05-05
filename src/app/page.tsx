import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-lg m-auto grid gap-10">
      <Button>Home Page</Button>
      <Image
        src="/hook-store.png"
        alt="logo"
        height={1080}
        width={1080}
        className="h-40 w-40"
      />
    </div>
  );
};

export default Home;
