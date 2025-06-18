import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import Link from "next/link";

export const sections = [
    { id: "section1",
    title: "sample1",
    date: "6/18",
    text: "sample1"
    },
]


export const TopNewsList: FC<TopProps> = () => {
    return (
        <div>
            <h2>My News</h2>
            <ol>
                {sections.map(section => (
                <li key={section.id}>
                    <Link href={`/news#${section.id}`}>{section.title}</Link>
                </li>    
                ))}
            </ol>
        </div>
    );
}
