import { HeaderIcon } from "@/assest/HeaderIcon"
import { LightIcon } from "@/assest/Light"
import Link from "next/link"


export const Header = () => {
    return (
        <div className="flex items-center justify-between h-[95px] w-full">
            <Link href={'/'}><HeaderIcon className="cursor-pointer" width={48} height={48} /></Link>
            <LightIcon className="cursor-pointer" width={24} height={24} />
        </div>
    )
}