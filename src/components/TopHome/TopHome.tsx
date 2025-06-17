import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopProfile from "../TopProfile/TopProfile";
import NavButton from "../NavButton/NavButton";

const TopHome: FC<TopProps> = props => {
    const { name, career } = props;

    return (
        <div>
            <header className="sticky">
                <NavButton name={name} />
            </header>
            <div className="flex justify-center items-center mt-50">
                <TopProfile name={name} career={career} />
            </div>
        </div>
    );
}

export default TopHome;