import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import Link from "next/link";
import HandDrawnUnderline from "../CreateSVG/Hand.DrawUnderLine";
import { text1, text2, text3 } from "@/app/news/NewsText";

//テキストタイトル作成欄　※テキストは @/news/NewsText 。
export const sections = [
    { 
    id: "section1",
    title: "初めてのサイト制作",
    date: "2025 / 6/19 (木)",
    text: text1(),
    },
    { 
    id: "section2",
    title: "My News 実装",
    date: "2025 / 6/19 (木)",
    text: text2(),
    },
    {
    id: "section3",
    title: "プログラミング学習を始めて感じた「AI」の進歩",
    date: "2025 / 6/24 (火)",
    text: text3(),
    },
]


export const TopNewsList: FC<TopProps> = () => {
    return (
        <div className="bg-slate-700/80 border-3 border-slate-800/40 p-5 pt-1 pl-3 pb-8 rounded-2xl shadow-xl/30">
            <HandDrawnUnderline>
                <h2 className="text-[36px] font-daruma1 relative z-0">My News</h2>
            </HandDrawnUnderline>
            <ol className="pl-3 mt-10">
                {sections.map(section => (
                <li key={section.id} className="border-b-1 border-cyan-600">
                    ‣ <Link href={`/news#${section.id}`} className="text-[20px] text-sky-500 hover:text-blue-500">
                        {section.title}
                    </Link>
                    <span className="ml-3 text-[18px]">
                        {section.date}
                    </span>
                </li>    
                ))}
            </ol>
        </div>
    );
}
