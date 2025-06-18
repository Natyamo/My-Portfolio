"use client";

import React, { FC } from "react";
import "@/styles/globals.css";
import { useSections } from "@/components/Context/Context";
import { HomeButton } from "@/components/Navigation/NaviButton";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

const NewsList: FC = () => {
    const { sections, name } = useSections();

    return (
        <div>
            <header className="sticky top-1">
                <div className="m-2 p-3 bg-slate-700/90 rounded-2xl border-4 border-slate-800/40 shadow-xl/20">
                            <div className="absolute top-2">
                                <h1 className="text-[12px] font-daruma1 leading-tight">Biginner Programer</h1>
                                <h2 className="text-4xl font-daruma1 animate-gradatecolor">{name}</h2>
                            </div>
                            <nav className="flex justify-center items-center space-x-5">
                                <Link href={"/"}>
                                    <HomeButton />
                                </Link>
                            </nav>
                        </div>
            </header>
            <h1>My News</h1>
            <section>
                {sections?.map(section => (
                <div key={section.id}>
                    <h3>{section.title}<small>{section.date}</small></h3>
                    <p>{section.text}</p>
                </div>
            ))}
            </section>
            <ScrollToTopButton />
        </div>
    );
}

export default NewsList;