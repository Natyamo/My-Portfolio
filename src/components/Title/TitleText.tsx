import React, { Children, FC } from "react";
import "@/styles/globals.css";
import { TitleTextProps } from "@/types/type";

const TitleText: FC<TitleTextProps> = props => {
    const {
        title,
        name,
    } = props;
    return (
        <h1 className="
        font-superbold text-3xl font-bigtitle 
        transition delay-150 duration-500 
        hover:scale-110
        animate-gradatecolor
        ">
            　{title} 　　　by {name} 
        </h1>
    )
}

export default TitleText;