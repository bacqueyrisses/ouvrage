import { sql } from "@vercel/postgres";

export default async function WordsList() {
  const { rows } = await sql`SELECT * FROM "Word";`;
  const index = Math.round(Math.random() * (rows.length - 1));

  // @ts-ignore
  return <div>{rows[index]?.title}</div>;
}
