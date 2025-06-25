import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopTitle from "./TopTitle";
import TopIcon from "./TopIcon";
import TopText from "./TopText";


const TopProfile: FC<TopProps> = () => {
    return (
        <div className="md:w-1/2">
            <section className="relative left-4 bg-slate-700/80 m-10 md:mt-20 mt-0 md:p-10 p-5 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                <div className="hidden md:flex">
                    <TopTitle />
                    <TopIcon />
                </div>
                <div>
                    <TopText />
                </div>
            </section>
        </div>
    );
}

export default TopProfile;