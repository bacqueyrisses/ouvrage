interface WordsListI {
  dailyWord: string;
  dailyDescription: string;
  newWord: string;
  newDescription: string;
}

export default function WordsList({
  dailyWord,
  dailyDescription,
  newWord,
  newDescription,
}: WordsListI) {
  return (
    <>
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        {newWord || dailyWord}
      </h1>
      <p className="max-w-4/6 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {newDescription || dailyDescription}
      </p>
    </>
  );
}
