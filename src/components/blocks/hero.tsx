import { hero } from "@/constants/config";
import React from "react";
import Container from "../shared/container";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative grid min-h-[calc(100vh-72px)] w-full place-items-center">
      <Container>
        <div className="mx-auto grid w-full max-w-xl gap-2 py-12">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="text-center text-muted-foreground md:px-12 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button asChild>
              <Link href={"/docs"}>{hero.action.browse.title}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href={hero.action.github.url}
                target="_blank"
                className="flex items-center justify-center gap-1"
              >
                <Image
                  src={hero.action.github.icon}
                  alt="Github Icon"
                  height={720}
                  width={720}
                  className="h-5 w-5"
                />
                {hero.action.github.title}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
      {/* pillars */}
      <div className="absolute -z-10 mx-auto flex h-full w-fit items-center justify-center gap-4">
        <div className="h-full w-8 bg-primary-foreground md:w-12 lg:w-16"></div>
        <div className="h-full w-8 bg-primary-foreground md:w-12 lg:w-16"></div>
      </div>
    </div>
  );
};

export default Hero;
