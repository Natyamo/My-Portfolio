import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import Link from "next/link";
import HandDrawnUnderline from "@/components/CreateSVG/Hand.DrawUnderLine";
import { text1, text2, text3, text4, text5, text6 } from "@/app/news/NewsText";

//テキストタイトル作成欄　※テキストは @/news/NewsText 。
export const sections = [
    { 
    id: "section1",
    title: "初めてのサイト制作(Ver.1.0.0)",
    date: "2025 / 6/19 (木)",
    text: text1(),
    },
    { 
    id: "section2",
    title: "アップデートのお知らせ(Ver1.1.0)",
    date: "2025 / 6/19 (木)",
    text: text2(),
    },
    {
    id: "section3",
    title: " AI の進歩",
    date: "2025 / 6/24 (火)",
    text: text3(),
    },
    {
    id: "section4",
    title: "アップデートのお知らせ(Ver.1.2.1)",
    date: "2025 / 6/29 (日)",
    text: text4(),
    },
    {
    id: "section5",
    title: "アップデートのお知らせ(Ver.1.2.2)",
    date: "2025 / 6/29 (日)",
    text: text5(),
    },
    {
    id: "section6",
    title: "新規開発プロジェクト #1 【始動】",
    date: "2025 / 7/2 (水)",
    text: text6(),
    },
]


export const TopNewsList: FC<TopProps> = () => {
    return (
        <div className="hidden md:block bg-slate-700/80 border-3 border-slate-800/40 p-5 pt-1 pl-3 pb-8 rounded-2xl shadow-xl/30">
            <HandDrawnUnderline>
                <h2 className="md:text-[36px] font-daruma1 relative z-0">My News</h2>
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
