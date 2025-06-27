"use client";

import React, { FC, useState } from "react";
import "@/styles/globals.css";
import { NaviContact2 } from "./NaviButton";
import { NaviAbout } from "./NaviButton";
import { NaviSkill } from "./NaviButton";
import { NaviNews } from "./NaviButton";
import { XButton, GithubButton } from "./NaviButton";


const NaviMobile: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* モバイル用ハンバーガーメニュー */}
            <div className="md:hidden absolute top-5 right-8 z-20">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col justify-center items-center w-10 h-10"
                    aria-label="メニューを開く"
                >
                    <span className={`block w-8 h-1 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-8 h-1 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>
            {/* モバイルメニュー */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-3/5 max-w-xs bg-slate-800/95 shadow-lg z-30 transform transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <nav className="flex flex-col items-center mt-20 space-y-6">
                    <NaviContact2 onClick={() => setMenuOpen(false)} />
                    <NaviAbout onClick={() => setMenuOpen(false)} />
                    <NaviSkill onClick={() => setMenuOpen(false)} />
                    <NaviNews onClick={() => setMenuOpen(false)} />
                    <div className="flex flex-col mt-10 space-y-3">
                        <XButton />
                        <GithubButton />
                    </div>
                </nav>
            </div>
            {/* オーバーレイ（メニューオープン時のみ表示） */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-10 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </div>
    );
}

export default NaviMobile;