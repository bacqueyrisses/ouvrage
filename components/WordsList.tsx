// @ts-nocheck
export default async function WordsList({ dailyWord }) {
  // @ts-ignore
  return (
    <>
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        {dailyWord.title}
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {dailyWord.description}
      </p>
    </>
  );
}
