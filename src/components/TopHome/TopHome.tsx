import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import TopProfile from "@/components/TopProfile/TopProfile";
import { TopNewsList } from "@/components/TopNews/TopNews";

export const name = "Natyamo";

export const TopHome: FC<TopProps> = () => {

    return (
        <div className="flex justify-center items-center mt-10 md:m-30 space-x-10">
            <TopProfile />
            <TopNewsList />
        </div>       
    );
}