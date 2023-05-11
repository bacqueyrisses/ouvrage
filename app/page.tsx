// @ts-nocheck
import WordsList from "@/components/WordsList";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";
import Image from "next/image";

export default async function Home() {
  const getWords = async () => {
    const { rows } = await sql`SELECT * FROM "Word";`;
    if (!rows) {
      throw new Error("Failed to fetch data from Word.");
    }
    return rows;
  };

  const words = await getWords();
  const index = Math.round(Math.random() * (words.length - 1));
  const dailyWord = words[index];

  return (
    <main className={"mb-5"}>
      <Header words={words} />
      <section className="space-y-6 pb-10 pt-6 md:pb-12 md:pt-10 lg:py-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <WordsList dailyWord={dailyWord} />
          <div className="space-x-4">
            <Button>Mot aléatoire</Button>
            <Button variant={"secondary"}>Mot de ma liste</Button>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="mx-auto flex w-5/6 flex-col items-center justify-evenly gap-4 bg-slate-50 py-8 md:container md:container dark:bg-transparent md:flex-row md:px-24 md:py-12 lg:w-9/12 lg:gap-10"
      >
        <div className={"flex flex-col items-center gap-2"}>
          <Image
            src={"/illustrations/discover.svg"}
            alt={""}
            width={200}
            height={80}
            className="rounded-md border bg-slate-100 transition-colors dark:bg-slate-500 sm:hidden"
            priority={index <= 1}
          />
          <Image
            src={"/illustrations/discover.svg"}
            alt={""}
            width={300}
            height={100}
            className="hidden rounded-md border bg-muted bg-slate-100 transition-colors dark:bg-slate-500 sm:inline-block"
            priority={index <= 1}
          />
          <p className="text-center text-sm leading-normal sm:text-lg sm:leading-7">
            Découvrez de nouveaux mots
          </p>
        </div>
        <div className={"flex flex-col items-center gap-2"}>
          <Image
            src={"/illustrations/favorite.svg"}
            alt={""}
            width={200}
            height={80}
            className="rounded-md border bg-muted bg-slate-100 transition-colors dark:bg-slate-500 sm:hidden"
            priority={index <= 1}
          />
          <Image
            src={"/illustrations/favorite.svg"}
            alt={""}
            width={300}
            height={100}
            className="hidden rounded-md border bg-muted bg-slate-100 transition-colors dark:bg-slate-500 sm:inline-block"
            priority={index <= 1}
          />
          <p className="text-center text-sm leading-normal sm:text-lg sm:leading-7">
            Créez votre liste de jolis mots
          </p>
        </div>
        <div className={"flex flex-col items-center gap-2"}>
          <Image
            src={"/illustrations/list.svg"}
            alt={""}
            width={200}
            height={80}
            className="rounded-md border bg-muted bg-slate-100 transition-colors dark:bg-slate-500 sm:hidden"
            priority={index <= 1}
          />
          <Image
            src={"/illustrations/list.svg"}
            alt={""}
            width={300}
            height={100}
            className="hidden rounded-md border bg-muted bg-slate-100 transition-colors dark:bg-slate-500 sm:inline-block"
            priority={index <= 1}
          />
          <p className="text-center text-sm leading-normal sm:text-lg sm:leading-7">
            Mots : Votre liste ou la nôtre
          </p>
        </div>
      </section>
    </main>
  );
}
