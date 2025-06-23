import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopTitle from "./TopTitle";
import TopIcon from "./TopIcon";
import TopText from "./TopText";


const TopProfile: FC<TopProps> = props => {
    return (
        <div>
            <section className="bg-slate-700/80 m-10 mt-20 p-10 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
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