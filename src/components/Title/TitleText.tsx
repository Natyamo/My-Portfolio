import React, { Children, FC } from "react";
import "@/styles/globals.css";
import { TitleTextProps } from "@/types/type";

const TitleText: FC<TitleTextProps> = props => {
    const {
        title,
        name,
    } = props;
    return (
        <h1 className="text-sky-600 font-mono font-bold text-3xl">
            {title} {name} 
        </h1>
    )
}

export default TitleText;