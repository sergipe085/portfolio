import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="h-full px-4 w-full relative flex flex-col items-center justify-center">
      
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {"Contact me"}
      </p>

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
  );
}
