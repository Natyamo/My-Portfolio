import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopTitle from "./TopTitle";
import TopIcon from "./TopIcon";
import TopText from "./TopText";


const TopProfile: FC<TopProps> = props => {
    return (
        <div>
            <section className="bg-slate-700/80 p-15 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                <div className="flex">
                    <TopTitle />
                    <TopIcon />
                </div>
                <TopText />
            </section>
        </div>
    );
}

export default TopProfile;