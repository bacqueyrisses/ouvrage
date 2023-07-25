import {kv} from "@vercel/kv";
import {getCurrentDay} from "@/lib/utils";
import { NextResponse } from 'next/server';

// const currentDay = getCurrentDay
const currentDay =  "enzo"


export async function GET() {
    const word = await kv.get(currentDay)
    return NextResponse.json(word);
}