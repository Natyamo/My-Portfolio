import React, { Children, FC } from "react";
import "@/styles/globals.css";
import { TextProps } from "@/types/type";

const TitleText: FC<TextProps> = props => {
    const { name } = props;
    return (
        <h1 className="relative">
            <span className="text-4xl font-anton mr-35 animate-gradatecolor">My Portfolio</span>
            <span className="text-2xl">
                <span className="mx-3">by</span>
                <span className="font-daruma1">{name}</span>
            </span>
        </h1>
    )
}

export default TitleText;