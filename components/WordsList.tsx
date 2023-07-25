// @ts-nocheck
export default function WordsList({ dailyWord, newWord, description }) {
  // @ts-ignore
  return (
    <>
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        {newWord || dailyWord}
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {description}
      </p>
    </>
  );
}
