import { HeaderIcon } from "@/assest/HeaderIcon";
import Link from "next/link";
import ThemeProvider from "./ThemeProvider";


export const Header = () => {

    return (
        <div className="flex items-center justify-between h-[95px] w-full">
            <Link href={'/'}><HeaderIcon className="cursor-pointer" width={48} height={48} /></Link>
            <ThemeProvider />
        </div>
    )
}