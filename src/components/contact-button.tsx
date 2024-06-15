"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function ContactButton() {
    const router = useRouter();

    return (
        <Button onClick={() => router.push("/contact")}>Contact</Button>
    )
}