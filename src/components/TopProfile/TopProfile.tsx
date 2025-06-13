import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopTitle from "./TopTitle";
import TopIcon from "./TopIcon";
import TopText from "./TopText";


const TopProfile: FC<TopProps> = props => {
    const { name, career } = props;

    return (
        <div>
            <section className="bg-slate-700 p-8 rounded-4xl border-4 border-slate-800 shadow-xl/40">
                <div className="flex">
                    <TopTitle name={name} />
                    <TopIcon />
                </div>
                <TopText career={career} />
            </section>
        </div>
    );
}

export default TopProfile;