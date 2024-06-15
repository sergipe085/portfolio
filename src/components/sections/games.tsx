"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Subtitle } from "../ui/subtitle";
import { Title } from "../ui/title";

export function GameDevelopmentFeaturedProjects() {
    const router = useRouter();

    return (
        <div className="w-full py-40 h-[100vh]">
            <div className="w-64">
                <Subtitle>Games</Subtitle>
                <p>featured projects. <Button size={"sm"} variant={"link"} onClick={() => router.push("/games")}>see more</Button> </p>
                <Separator className="my-4 mb-12"/>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="bg-white aspect-video w-full md:w-[550px] rounded-2xl">

                </div>
                <div className="flex flex-col justify-end items-start gap-2 h-auto">
                    <Subtitle>project name</Subtitle>
                    <p className=" font-normal text-lg">Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.</p>
                    <Button className="mt-8" variant={"outline"}>Details</Button>
                </div>
            </div>
            <Separator className="my-8"/>
            <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="bg-white aspect-video w-full md:w-[550px] rounded-2xl">

                </div>
                <div className="flex flex-col justify-end items-start gap-2 h-auto">
                    <Subtitle>project name</Subtitle>
                    <p className=" font-normal text-lg">Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.</p>
                    <Button className="mt-8" variant={"outline"}>Details</Button>
                </div>
            </div>
        </div>
    )
}