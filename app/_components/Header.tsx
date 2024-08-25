"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import GithubSvg from "./icons/GithubSvg";
import LinkedinSvg from "./icons/LinkedinSvg";
import MaltSvg from "./icons/MaltSvg";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      setIsActive(currentScrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn("sticky flex w-full transition-all top-4 py-4 rounded-2xl", {
        "backdrop-blur-md": isActive,
        "backdrop-blur-0": !isActive,
      })}
    >
      <h1 className="text-2xl font-bold text-primary px-4">gael-dr.com</h1>

      <div className="flex-1" />
      <ul className="flex items-center gap-2">
        <Link
          href="https://github.com/GaelDuclocherRougelot"
          className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}
        >
          <GithubSvg size={16} className="text-primary" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/duclocher-rougelot-gael/"
          className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}
        >
          <LinkedinSvg size={16} className="text-primary" />
        </Link>
        <Link
          href="https://www.malt.fr/profile/gaelduclocherrougelot"
          className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}
        >
          <MaltSvg size={16} className="text-primary" />
        </Link>
      </ul>
    </header>
  );
}
