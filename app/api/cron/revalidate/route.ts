import { NextResponse } from "next/server";
import axios from "axios";
export async function GET() {
  try {
    await axios.get("https://www.ouvrage.dev/");
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch url.");
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
