import { hero } from "@/constants/config";
import React from "react";
import Container from "../shared/container";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] w-full grid place-items-center">
      <Container>
        <div className="w-full max-w-2xl mx-auto py-12 grid gap-4">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
            {hero.title}
          </h1>
          <p className="text-center md:text-lg text-foreground">
            {hero.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <Link href={hero.action.browse.url}>
                {hero.action.browse.title}
              </Link>
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
    </div>
  );
};

export default Hero;
