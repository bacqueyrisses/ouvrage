"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import SearchButton from "@/components/ui/custom/SearchButton";
export default function Header({ words }: any) {
  const [open, setOpen] = useState(false);

  // @ts-ignore
  return (
    <header className="w-full">
      <div className="container flex h-20 items-center py-7">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src="./book.svg"
              alt="Next.js Logo"
              width={25}
              height={25}
              priority
            />
            <span className="font-bold">Ouvrage</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <SearchButton onClick={() => setOpen(true)} />
          {/*<CommandDialog open={open} onOpenChange={setOpen} value={words} />*/}
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Rechercher un mot..." />
            <CommandList>
              <CommandEmpty>Aucun mot trouvé.</CommandEmpty>
              <CommandGroup heading="Mots trouvés">
                {words.map((word: any) => (
                  <CommandItem key={word.id} onSelect={() => console.log("hi")}>
                    <Search className="mr-2 h-4 w-4" />
                    {word.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
          <Button variant="secondary">Login</Button>
          <nav className="flex items-center space-x-1">
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md px-0 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              type="button"
              id="radix-:Rtlhja:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              >
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M12 3v1"></path>
                <path d="M12 20v1"></path>
                <path d="M3 12h1"></path>
                <path d="M20 12h1"></path>
                <path d="m18.364 5.636-.707.707"></path>
                <path d="m6.343 17.657-.707.707"></path>
                <path d="m5.636 5.636.707.707"></path>
                <path d="m17.657 17.657.707.707"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              >
                <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <span className="sr-only">Toggle theme</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
