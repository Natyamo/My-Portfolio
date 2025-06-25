import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";

const TopTitle: FC<TopProps> = () => {
    const name = "Natyamo";
    return (
        <div>
            <h1 className="md:text-3xl font-daruma1">Biginner Programer</h1>
            <h2 className="md:text-8xl font-daruma1 animate-gradatecolor">{name}</h2>
        </div>
    )
}

export default TopTitle;