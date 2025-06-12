import Image from "next/image";
import TitleText from "./TitleText";
import { TitleTextProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css"

const TitleIcon: FC<TitleTextProps> = props => {
    return (
        <div className="flex items-center gap-x-10 bg-slate-800 rounded-l-[40px] rounded-r-xl h-20 overflow-hidden">
            <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image
                    src="/TitleIcon.png"
                    alt="My-Icon"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-slate-700
                     transition delay-150 duration-500 hover:scale-110"
                />
            </div>
            <TitleText title="My Portfolio" name="Natyamo" />
        </div>
    )
}

export default TitleIcon;