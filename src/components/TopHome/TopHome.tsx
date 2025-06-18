import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopProfile from "@/components/TopProfile/TopProfile";
import NavButton from "@/components/Navigation/NavigationBar";
import { TopNewsList } from "@/components/TopNews/TopNews";

export const name = "Natyamo";

export const TopHome: FC<TopProps> = props => {
    const { career } = props;

    return (
        <div>
            <header className="sticky top-1">
                <NavButton />
            </header>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center m-30">
                    <TopProfile />
                </div>
                <div>
                    <TopNewsList />
                </div>
            </div>
            
        </div>
    );
}