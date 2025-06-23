import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopProfile from "@/components/TopProfile/TopProfile";
import { TopNewsList } from "@/components/TopNews/TopNews";

export const name = "Natyamo";

export const TopHome: FC<TopProps> = props => {
    const { career } = props;

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center m-30 space-x-10">
                    <TopProfile />
                    <TopNewsList />
                </div>
            </div>         
        </div>
    );
}