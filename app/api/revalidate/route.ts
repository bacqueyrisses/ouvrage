import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
    await fetch('https://www.ouvrage.dev/', {method: "GET"})
    revalidatePath("/")
    return NextResponse.json({ revalidated: true, now: Date.now() })
}