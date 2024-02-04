import { NextResponse } from "next/server";
import axios from "axios";
export async function GET() {
  if (!process.env.APP_URL) throw new Error("App URL not defined.");
  try {
    await axios.get(process.env.APP_URL);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch url.");
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
