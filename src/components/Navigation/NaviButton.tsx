import React, { FC } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const NaviContact: FC = () => {
    return (
        <div className="relative flex justify-center -translate-y-0.5 transition delay-75 duration-300 ease-out
        hover:translate-y-0.5 text-slate-400  hover:text-slate-100"
        >
            <MailOutlineIcon sx={{ fontSize: 36 }} />
            <p className="absolute top-7 text-[12px]">contact</p>
        </div>
    );
}

export const HomeButton: FC = () => {
    return (
        <div className="relative flex justify-center -translate-y-0.5 transition delay-75 duration-300 ease-out
        hover:translate-y-0.5 text-slate-400  hover:text-slate-100"
        >
            <HomeOutlinedIcon sx={{ fontSize: 36 }} />
            <p className="absolute top-7 text-[12px]">top</p>
        </div>
    );
}

export const NaviAbout: FC = () => {
    return (
        <div>
            <Link href="#about" scroll={true} className="p-1 text-2xl font-daruma1 border-b-1 border-slate-700 transition duration-200
            hover:text-emerald-400"
            >
                About
            </Link>
        </div>
    );
}