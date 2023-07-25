"use server"

import {kv} from "@vercel/kv";
import {getCurrentDay} from "@/lib/utils";

const currentDay = getCurrentDay

export const getStoredWord = async ():Promise<string | null> => await kv.get(currentDay)
export const setStoredWord = async (word:string) => await kv.set(currentDay, word)