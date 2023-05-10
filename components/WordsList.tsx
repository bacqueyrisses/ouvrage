// @ts-nocheck
export default async function WordsList({ words }) {
  const index = Math.round(Math.random() * (words.length - 1));
  // @ts-ignore
  return (
    <>
      <div>{words[index].title}</div>
    </>
  );
}
