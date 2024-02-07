import { kv } from "@vercel/kv";
import Image from "next/image";
import { getStoredWord, setStoredWord } from "@/lib/actions/words";
import ClientSection from "@/components/ClientSection";
import Footer from "@/components/Footer";

export default async function Home() {
  const json: { [key: string]: string } | null = await kv.get("json");

  const words = Object.entries(json!) as [string, string][];
  const wordsKeys = Object.keys(json!) as string[];
  const index = Math.round(Math.random() * (words.length - 1));

  const setWord = async () => {
    let storedWord: string | null = "";
    let storedDescription: string = "";

    await getStoredWord().then((currentWord) => {
      if (!currentWord) setStoredWord(words[index][0]).then(() => setWord());
      storedWord = currentWord;

      const currentDescription = words
        .find((value) => value[0] === currentWord)
        ?.at(1);
      if (!currentDescription) return;

      storedDescription = currentDescription;
    });

    return { storedWord, storedDescription };
  };
  const { storedWord, storedDescription } = await setWord();

  return (
    <div
      className={
        "flex min-h-screen flex-col justify-around pb-4 text-xs sm:pb-1 sm:text-sm"
      }
    >
      <main className={"mb-5"}>
        <ClientSection
          storedWord={storedWord}
          storedDescription={storedDescription}
          wordsKeys={wordsKeys}
          words={words}
        />
        <section
          id="features"
          className="mx-auto flex w-5/6 flex-col items-center justify-evenly gap-4 bg-slate-50 py-8 md:container  dark:bg-transparent md:flex-row md:px-24 md:py-12 lg:w-9/12 lg:gap-10"
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
              Un nouveau mot quotidien
              {/*Créez votre liste de jolis mots*/}
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
              Recherchez dans la liste
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
