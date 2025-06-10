import Image from "next/image";
import TitleText from "./TitleText";
import { TitleTextProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css"

const TitleIcon:FC<TitleTextProps> = props => {
    return (
            <span className="flex items-center gap-x-10">
                <span className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                        src="/TitleIcon.png"
                        alt="My-Icon"
                        width={180}
                        height={38}
                        objectFit="cover"
                    />
                </span>       
            <TitleText title="My Portfolio" name="なちゃも" />
            </span>
    )
} 

export default TitleIcon;