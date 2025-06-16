import Image from "next/image";
import { FC } from "react";
import "@/styles/globals.css"

const TopIcon: FC = props => {
    return (
        <div className="p-2">
            <div className="p-2 overflow-hidden">
                <Image
                    src="/TitleIcon.png"
                    alt="My-Icon"
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-4 border-slate-300 transition delay-150 duration-500 hover:scale-110"
                />
            </div>
        </div>
    )
}

export default TopIcon;