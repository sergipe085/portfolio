"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const router = useRouter();

    return (
        <header className="w-full fixed px-6 pt-4 md:px-20 md:pt-16 z-50 flex justify-between">
            <button className="cursor-pointer" onClick={() => router.back()}>
                <p className="font-light text-xl"> 
                    {"<"}
                </p>
            </button>
            <ThemeToggle/>
        </header>
    )
}