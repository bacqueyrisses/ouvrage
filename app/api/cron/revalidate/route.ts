import { NextResponse } from 'next/server'
import axios from "axios";

export async function GET() {
    await axios.get("https://www.ouvrage.dev/")
    return NextResponse.json({ revalidated: true, now: Date.now() })
}
