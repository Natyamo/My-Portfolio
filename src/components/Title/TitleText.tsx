import React, { Children, FC } from "react";
import "./Title.css";
import { TitleTextProps } from "@/types/type";

const TitleText: FC<TitleTextProps> = props => {
    const {
        title,
        name,
    } = props;
    return (
        <h1 className="text-sky-600 font-mono text-3xl">
            {title} {name} 
        </h1>
    )
}

export default TitleText;