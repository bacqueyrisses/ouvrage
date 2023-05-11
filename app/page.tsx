// @ts-nocheck
import WordsList from "@/components/WordsList";
import Header from "@/components/Header";
import axios from "axios";
import { baseURL } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const getWords = async () => {
    const { rows } = await sql`SELECT * FROM "Word";`;
    if (!rows) {
      throw new Error("Failed to fetch data from Word.");
    }
    return rows;
  };
  const words = await getWords();

  return (
    <main>
      <Header words={words} />
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <WordsList words={words} />
          <div className="space-x-4">
            <Button>Mot aléatoire</Button>
            <Button variant={"secondary"}>Mot de ma liste</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
