import { Mail, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";

export function ContactForm() {
    return (
        <div>
            <Card className="max-w-[30rem] w-full p-8">
                <CardTitle>Form</CardTitle>
                <CardDescription>Please fill the form to reach out me</CardDescription>
                <CardContent className="p-0 mt-4">
                    <Input placeholder="your name"></Input>
                </CardContent>
                <CardFooter className="w-full flex justify-end p-0 mt-4">
                    <Button variant={"ghost"}>Next</Button>
                </CardFooter>
            </Card>


            <p>or</p>

            <div className="flex flex-row gap-2">
                <div className=" rounded-full w-12 dark:bg-black bg-white flex items-center justify-center aspect-square dark:border-white border-solid border-[2px]">
                    <Mail/>
                </div>
                <div className=" rounded-full w-12 dark:bg-black bg-white flex items-center justify-center aspect-square dark:border-white border-solid border-[2px]">
                    <Github/>
                </div>
            </div>
        </div>
    )
}