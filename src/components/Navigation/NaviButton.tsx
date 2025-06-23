"use client";

import React, { FC, useState, useEffect } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HandDrawnUnderline2 from "../CreateSVG/Hand.DrawUnderLine2";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HandDrawnCircle from "../CreateSVG/Hand.DrawUnderLine3";

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
        className="transition-transform duration-200 ease-in-out hover:-translate-y-1 group-hover:scale- group-hover:animate-shake-icon"
      >
        <MailOutlineIcon sx={{ fontSize: 36 }} />
      </span>
      <p className="absolute top-8 text-[12px]">Contact</p>
    </div>
  );
};

export const HomeButton: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
    className="relative flex justify-center group transition delay-75 duration-200 ease-out
    text-slate-400 hover:text-slate-100"
    >
      <span
      className="transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110"
      >
        <HandDrawnCircle
        animate
        trigger={hover}
        duration={500}
        >
          <span className="cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
            <HomeSharpIcon sx={{ fontSize: 36 }} />
          </span>         
        </HandDrawnCircle>   
      </span>
    </div>
  );
};

export const HomeButton2: FC = () => {
  return (
    <div
      className="relative flex justify-center group transition delay-75 duration-200 ease-out
     text-slate-400 hover:text-slate-100"
    >
      <span
        className="transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110 group-hover:animate-shake-icon"
      >
        <HomeSharpIcon sx={{ fontSize: 36 }} />
      </span>
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

export const NaviSkill: FC = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className="cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ display: "inline-block", cursor: "pointer" }}
        >
            <HandDrawnUnderline2 animate trigger={hover} duration={700}>
                <Link href="#skill" scroll={true} className="p-1 text-2xl font-daruma1 border-b-1 border-slate-700"
                >
                    Skill
                </Link>
            </HandDrawnUnderline2>
        </div>
    );
}

export const ScrollToTopButton: React.FC = () => {
  const SCROLL_THRESHOLD = 200; // 何pxスクロールしたら活性化するか
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [hover, setHover] = useState(false);

  return (
    <div className="relative transition delay-75 duration-500 ease-in-out">
      <button
      onClick={handleClick}
      aria-label="ページの先頭へ戻る"
      className={`
      transition-all duration-400 ease-out hover:-translate-y-0.5 group-hover:scale-125
      ${active ? "opacity-100 cursor-pointer text-slate-100" : "opacity-0 pointer-events-none text-slate-400"}
      `}
      >
        <HandDrawnCircle
        animate
        trigger={hover}
        duration={500}
        >
          <span className="cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
            <ArrowUpwardIcon sx={{ fontSize: 30 }} />
          </span>
        </HandDrawnCircle>  
      </button>
    </div>
  
  );
};