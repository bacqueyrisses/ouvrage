"use client"
// @ts-nocheck
import Header from "@/components/Header";
import {useEffect, useRef, useState} from "react";
import WordsList from "@/components/WordsList";
import {Button} from "@/components/ui/button";

export default function ClientSection({wordy, description, words, wordsKeys} : any) {
    const [dailyWord, setDailyWord] = useState<string>(wordy)
    const[dailyDescription, setDailyDescription] = useState<string>(description)
    const [newDescription, setNewDescription] = useState<string>("")
    const newWordRef = useRef("")
    const index = Math.round(Math.random() * (words.length - 1));


    const handleRandom = () => {
        newWordRef.current = words[index][0]

        const currentDescription = words.find((value: string[]) => value[0] === newWordRef.current)?.at(1)
        if (!currentDescription) return
        setNewDescription(() => currentDescription)
    }

    const handleSearch = (word: string) => {
        newWordRef.current = word

        const currentDescription = words.find((value: string[]) => value[0] === newWordRef.current)?.at(1)
        if (!currentDescription) return
        setNewDescription(currentDescription)
    }

    const handleHomepage = () => {
        newWordRef.current = ""
        setNewDescription("")
    }
    return (
        <>
            <Header words={wordsKeys} handleSearch={handleSearch} handleHomepage={handleHomepage}/>
            <section className="space-y-6 pb-10 pt-6 md:pb-12 md:pt-10 lg:py-10">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <WordsList dailyWord={dailyWord} newWord={newWordRef.current} dailyDescription={dailyDescription} newDescription={newDescription}/>
                    <div className="space-x-4">
                        <Button onClick={handleRandom}>Mot aléatoire</Button>
                        {/*<Button variant={"secondary"}>Mot de ma liste</Button>*/}
                    </div>
                </div>
            </section>
        </>
    )
}