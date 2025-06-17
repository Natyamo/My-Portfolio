import React, { FC } from "react";
import "@/styles/globals.css";
import { TopProps } from "@/types/type";
import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const NavButton: FC<TopProps> = props => {
    const { name } = props;

    return (
        <div className="m-2 p-3 bg-slate-700/80 rounded-2xl border-4 border-slate-800/40 shadow-xl/20">
            <div className="absolute top-2">
                <h1 className="text-[12px] font-daruma1 leading-tight">Biginner Programer</h1>
                <h2 className="text-4xl font-daruma1 animate-gradatecolor">{name}</h2>
            </div>
            <nav className="flex justify-center items-center space-x-5">
                <div className="-translate-y-0.5 transition delay-75 duration-300 ease-out hover:translate-y-0.5 text-slate-400 border-2 border-slate-400 rounded-2xl
                            hover:text-slate-100 hover:border-slate-100">
                    <Link href="/">
                        <HomeOutlinedIcon sx={{ fontSize: 36 }} />
                    </Link>
                </div>
                <ul className="">
                    <li className="p-1 text-2xl font-daruma1 border-b-1 border-slate-700 transition duration-200 hover:text-emerald-400">
                        <Link href="/about">About</Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavButton;