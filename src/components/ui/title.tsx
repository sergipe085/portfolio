import { ChildrenProps } from "@/lib/utils";

export function Title({ children }: ChildrenProps) {
    return (
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            { children }
        </h1>
    )
}