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
    <main>
      <Header words={words} />
      <section className="space-y-6 pb-10 pt-6 md:pb-12 md:pt-10 lg:py-20">
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
        className="container flex flex-col items-center justify-evenly gap-4 bg-slate-50 py-8 dark:bg-transparent md:flex-row md:py-12"
      >
        <div className={"space-y-2 md:space-y-4"}>
          <Image
            src={"/illustrations/woman.svg"}
            alt={""}
            width={330}
            height={100}
            className="rounded-md border bg-muted transition-colors"
            priority={index <= 1}
          />
          <p className="text-center leading-normal sm:text-lg sm:leading-7">
            Un nouveau mot chaque jour
          </p>
        </div>
        <div className={"space-y-2 md:space-y-4"}>
          <Image
            src={"/illustrations/woman.svg"}
            alt={""}
            width={330}
            height={100}
            className="rounded-md border bg-muted transition-colors"
            priority={index <= 1}
          />
          <p className="text-center leading-normal sm:text-lg sm:leading-7">
            Ajoutez vos favoris à votre liste
          </p>
        </div>
        <div className={"space-y-2 md:space-y-4"}>
          <Image
            src={"/illustrations/woman.svg"}
            alt={""}
            width={330}
            height={100}
            className="rounded-md border bg-muted transition-colors"
            priority={index <= 1}
          />
          <p className="text-center leading-normal sm:text-lg sm:leading-7">
            Accédez à un mot aléatoire
          </p>
        </div>
      </section>
    </main>
  );
}
