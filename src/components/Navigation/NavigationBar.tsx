"use client";

import React, { FC } from "react";
import "@/styles/globals.css";
import { NaviContact } from "./NaviButton";
import { NaviAbout } from "./NaviButton";
import { useSections } from "@/components/Context/Context";

const NavButton: FC = () => {
    const { name } = useSections();

    return (
        <div className="m-2 p-3 bg-slate-700/90 rounded-2xl border-4 border-slate-800/40 shadow-xl/20">
            <div className="absolute top-3">
                <h1 className="text-[12px] font-daruma1 leading-tight">Biginner Programer</h1>
                <h2 className="absolute top-1 text-4xl font-daruma1 animate-gradatecolor">{name}</h2>
            </div>
            <nav className="flex justify-center items-center space-x-5">
                <NaviContact />
                <ul>
                    <li>
                        <NaviAbout />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavButton;