import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopProfile from "../TopProfile/TopProfile";
import NavButton from "../NavButton/NavButton";

const TopHome: FC<TopProps> = props => {
    const { name, career } = props;

    return (
        <div>
            <header className="sticky top-1">
                <NavButton name={name} />
            </header>
            <div className="flex justify-center items-center m-30">
                <TopProfile name={name} career={career} />
            </div>
        </div>
    );
}

export default TopHome;