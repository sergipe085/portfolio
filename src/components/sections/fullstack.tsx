"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Subtitle } from "../ui/subtitle";
import { useRouter } from "next/navigation";

export function FullstackFeaturedProjects() {
    const router = useRouter();

    return (
        <div className="w-full py-40 h-auto">
            <div className=" w-64">
                <Subtitle>Fullstack apps</Subtitle>
                <p>featured projects. <Button size={"sm"} variant={"link"} onClick={() => router.push("/fullstack")}>see more</Button> </p>
                <Separator className="my-4 mb-12"/>
            </div>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => router.push("/mobile/1")}>
                    <Image className="rounded-3xl aspect-square w-24" width={512} height={512} src={"/museumarlogo.png"} alt="museu ar logo"/>
                    <p className=" text-sm">Museum AR</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image className="rounded-3xl aspect-square w-24" width={512} height={512} src={"/museumarlogo.png"} alt="museu ar logo"/>
                    <p className=" text-sm">Museum AR</p>
                </div>
                 
            </div>
        </div>
    )
}