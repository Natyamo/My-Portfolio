import React, { FC, useState } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HandDrawnUnderline2 from "../CreateSVG/Hand.DrawUnderLine2";

export const NaviContact: FC = () => {
    return (
        <div className="relative flex justify-center -translate-y-0.5 transition delay-75 duration-200 ease-out
        hover:translate-y-0.5 text-slate-400  hover:text-slate-100"
        >
            <MailOutlineIcon sx={{ fontSize: 36 }} />
            <p className="absolute top-7 text-[12px]">contact</p>
        </div>
    );
}

export const NaviContact2: FC = () => {
  return (
    <div
      className="relative flex justify-center group transition delay-75 duration-200 ease-out
     text-slate-400 hover:text-slate-100"
    >
      <span
        className="transition-transform duration-200 ease-in-out hover:-translate-y-1 group-hover:scale-125 group-hover:animate-shake-icon"
      >
        <MailOutlineIcon sx={{ fontSize: 36 }} />
      </span>
      <p className="absolute top-8 text-[12px]">Contact</p>
    </div>
  );
};

export const HomeButton: FC = () => {
    return (
        <div className="relative flex justify-center -translate-y-0.5 transition delay-75 duration-200 ease-out
        hover:translate-y-0.5 text-slate-400  hover:text-slate-100"
        >
            <HomeSharpIcon sx={{ fontSize: 36 }} />
            <p className="absolute top-7 text-[12px]">top</p>
        </div>
    );
}

export const HomeButton2: FC = () => {
  return (
    <div
      className="relative flex justify-center group transition delay-75 duration-200 ease-out
     text-slate-400 hover:text-slate-100"
    >
      <span
        className="transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-125 group-hover:animate-shake-icon"
      >
        <HomeSharpIcon sx={{ fontSize: 36 }} />
      </span>
      <p className="absolute top-8 text-[12px]">Top</p>
    </div>
  );
};

export const NaviAbout: FC = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className="cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ display: "inline-block", cursor: "pointer" }}
        >
            <HandDrawnUnderline2 animate trigger={hover} duration={700}>
                <Link href="#about" scroll={true} className="p-1 text-2xl font-daruma1 border-b-1 border-slate-700"
                >
                    About
                </Link>
            </HandDrawnUnderline2>
        </div>
    );
}