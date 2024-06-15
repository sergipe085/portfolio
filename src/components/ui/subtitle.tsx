import { ChildrenProps } from "@/lib/utils";

export function Subtitle({ children }: ChildrenProps) {
    return (
        <h1 className=" text-xl md:text-4xl font-semibold dark:text-white">
            { children }
        </h1>
    )
}