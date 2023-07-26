import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import axios from "axios";

export async function GET(request: NextRequest) {
    await axios.get("https://www.ouvrage.dev/")
    return NextResponse.json({ revalidated: true, now: Date.now() })
}
