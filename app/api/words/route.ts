import { sql } from "@vercel/postgres";

export async function GET(request: any) {
  const { rows } = await sql`SELECT * FROM "Word";`;

  if (!rows) {
    throw new Error("Failed to fetch data from Word.");
  }

  return new Response(JSON.stringify(rows));
}
