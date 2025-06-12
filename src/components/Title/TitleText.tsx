import React, { Children, FC } from "react";
import "@/styles/globals.css";
import { TitleTextProps } from "@/types/type";

const TitleText: FC<TitleTextProps> = props => {
    const { title, name } = props;
    return (
        <h1 className="relative">
            <span className="text-4xl font-anton mr-35 animate-gradatecolor">{title}</span>
            <span className="text-2xl">
                <span className="mx-1">by</span>
                <span className="font-daruma1">{name}</span>
            </span>
        </h1>
    )
}

export default TitleText;