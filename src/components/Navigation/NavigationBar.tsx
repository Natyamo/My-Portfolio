"use client";

import React, { FC } from "react";
import "@/styles/globals.css";
import { NaviContact2 } from "./NaviButton";
import { NaviAbout } from "./NaviButton";
import { NaviSkill } from "./NaviButton";
import { NaviNews } from "./NaviButton";
import { useSections } from "@/components/Context/Context";
import { ScrollToTopButton } from "./NaviButton";
import TopIcon from "../TopProfile/TopIcon";
import { XButton, GithubButton } from "./NaviButton";

const NavButton: FC = () => {
    const { name } = useSections();

    return (
        <div className="md:w-full relative m-2 md:p-3 bg-slate-700/90 rounded-2xl border-4 border-slate-800/40 shadow-xl/20">
            <div className="p-2 pl-4 flex items-center md:absolute md:top-1 md:left-3">
                <div>
                    <h1 className="text-[12px] font-daruma1 leading-tight">Biginner Programer</h1>
                    <h2 className="md:absolute md:top-3 text-4xl font-daruma1 animate-gradatecolor">{name}</h2>
                </div>
                <div className="absolute left-40 md:hidden w-22 h-22 ">
                    <TopIcon />
                </div>
            </div>
            
            {/* PC用ナビゲーション */}
            <nav className="relative hidden md:flex justify-center items-center space-x-10">
                <NaviContact2 />
                <ul className="flex justify-center items-center space-x-3">
                    <li>
                        <NaviAbout />
                    </li>
                    <li>
                        <NaviSkill />
                    </li>
                    <li>
                        <NaviNews />
                    </li>
                    <li>
                        <ScrollToTopButton />
                    </li>
                    <div className="absolute right-10 flex justify-center space-x-3">
                        <li>
                            <XButton />
                        </li>                   
                        <li>
                            <GithubButton />
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default NavButton;