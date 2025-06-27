"use client";

import React, { FC } from "react";
import "@/styles/globals.css";
import { useSections } from "@/components/Context/Context";
import { HomeButton } from "@/components/Navigation/NaviButton";
import Link from "next/link";
import { ScrollToTopButton } from "@/components/Navigation/NaviButton";
import HandDrawnUnderline from "@/components/CreateSVG/Hand.DrawUnderLine";
import { MobileScrollToTopButton } from "@/components/Navigation/NaviButton";

const NewsList: FC = () => {
    const { sections, name } = useSections();

    return (
        <div>
            <header className="sticky top-8 z-50">
                <div className="m-2 p-3 bg-slate-700/90 rounded-2xl border-4 border-slate-800/40 shadow-xl/20">
                    <div className="absolute top-3">
                        <h1 className="text-[12px] font-daruma1 leading-tight">Biginner Programer</h1>
                        <h2 className="absolute top-1 text-4xl font-daruma1 animate-gradatecolor">{name}</h2>
                    </div>
                    <nav className="relative flex justify-end md:justify-center items-center space-x-10">
                        <Link href={"/"}>
                            <HomeButton />
                        </Link>
                        <div className="hidden md:block">
                            <ScrollToTopButton />
                        </div>
                    </nav>
                </div>
            </header>
            <div className="flex justify-center mt-20 md:mr-10 md:mb-10 text-5xl font-daruma1">
                <HandDrawnUnderline>
                    <h1>My News</h1>
                </HandDrawnUnderline>
            </div>
            <div>
                {sections?.map(section => (
                <section className="flex justify-center items-center m-3 pt-10 md:pt-30" id={section.id} key={section.id}>
                    <div className="flex-col bg-slate-800 border-3 border-slate-900 p-3 rounded-2xl overflow-auto w-[800px] ...">
                    <h3 className="text-[20px] md:text-[28px]">【 {section.title} 】<small className="ml-5">{section.date}</small></h3>
                    <div className="mt-8 ml-5 mr-5 mb-2 md:text-[20px]">{section.text}</div>
                    </div>
                </section>
            ))}
            </div>
            <div className="md:hidden">
                <MobileScrollToTopButton />
            </div>
        </div>
    );
}

export default NewsList;