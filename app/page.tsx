// @ts-nocheck
import WordsList from "@/components/WordsList";
import Header from "@/components/Header";
import axios from "axios";
import { baseURL } from "@/lib/utils";

export default async function Home() {
  const { data: words } = await axios.get(`${baseURL}/api/words`).catch((e) => {
    throw new Error(e);
  });

  return (
    <main>
      <Header words={words} />
      <WordsList words={words} />
    </main>
  );
}
