"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SearchButton from "@/components/ui/custom/SearchButton";
import SearchMenu from "@/components/ui/custom/SearchMenu";
import Link from "next/link";
import SearchControl from "@/components/ui/custom/SearchControl";
import ModeSwitcher from "@/components/ModeSwitcher";
export default function Header({ words }: any) {
  // @ts-ignore
  return (
    <header className="w-full">
      <div className="container flex h-20 items-center py-7">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src="./book.svg"
              alt="Next.js Logo"
              width={25}
              height={25}
              priority
            />
            <span className="font-bold">Ouvrage</span>
          </Link>
          <div
            className={
              "hidden rounded-2xl bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 md:block"
            }
          >
            Un nouveau mot quotidien
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <SearchControl words={words} />
          <Button variant="secondary">Connexion</Button>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
