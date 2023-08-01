import Image from "next/image";
import SearchControl from "@/components/ui/custom/SearchControl";
import ModeSwitcher from "@/components/ModeSwitcher";
import logo from "@/public/logo.webp";
import logoDark from "@/public/logo-dark.webp";

interface HeaderI {
  words: string[];
  handleSearch: (word: string) => void;
  handleHomepage: () => void;
}
export default function Header({
  words,
  handleSearch,
  handleHomepage,
}: HeaderI) {
  return (
    <header className="w-full">
      <div className="container flex h-20 items-center">
        <div className="flex items-center gap-2">
          <button className="flex items-center" onClick={handleHomepage}>
            <Image
              src={logo}
              alt="Ouvrage light Logo"
              className={"inline dark:hidden"}
              width={52}
              height={52}
              priority
            />
            <Image
              src={logoDark}
              className={"hidden dark:inline"}
              alt="Ouvrage dark Logo"
              width={52}
              height={52}
              priority
            />
            {/*<span className="hidden font-bold sm:inline-block">Ouvrage</span>*/}
          </button>
          <div
            className={
              "inline hidden rounded-2xl bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 md:block"
            }
          >
            Le lexique des jolis mots
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <SearchControl words={words} handleSearch={handleSearch} />
          {/*<Button variant="secondary" className={"h-9"}>*/}
          {/*  <span className={"hidden sm:inline-block"}>Connexion</span>*/}
          {/*  <User size={19} className={"sm:hidden"} />*/}
          {/*</Button>*/}
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
