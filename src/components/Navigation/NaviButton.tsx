"use client";

import React, { FC, useState, useEffect } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HandDrawnUnderline2 from "../CreateSVG/Hand.DrawUnderLine2";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HandDrawnCircle from "../CreateSVG/Hand.DrawUnderLine3";
import SendIcon from '@mui/icons-material/Send';

export const NaviContact2: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="relative flex justify-center group transition delay-75 duration-200 ease-out text-slate-400 hover:text-slate-100">      
      <span className="transition-transform duration-200 ease-in-out hover:-translate-y-1 group-hover:scale- group-hover:animate-shake-icon">
        <Link href="#contact" scroll={true} className="p-1 text-2xl font-daruma1 border-b-1 border-slate-700" onClick={onClick}>
          <MailOutlineIcon sx={{ fontSize: 36 }} />
        </Link>
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

export const NaviAbout: FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <HandDrawnUnderline2 animate trigger={hover} duration={700}>
        <Link href="#about" scroll={true} className="p-1 text-2xl font-daruma1" onClick={onClick}>
          About
        </Link>
      </HandDrawnUnderline2>
    </div>
  );
};

export const NaviSkill: FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <HandDrawnUnderline2 animate trigger={hover} duration={700}>
        <Link href="#skill" scroll={true} className="p-1 text-2xl font-daruma1" onClick={onClick}>
          Skill
        </Link>
      </HandDrawnUnderline2>
    </div>
  );
};

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

export const NaviNews: FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <HandDrawnUnderline2 animate trigger={hover} duration={700}>
        <Link href="/news" scroll={true} className="p-1 text-2xl font-daruma1" onClick={onClick}>
          News
        </Link>
      </HandDrawnUnderline2>
    </div>
  );
};

export const Formbutton: FC<{ disabled?: boolean }> = ({ disabled = false }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative transition delay-75 duration-500 ease-in-out">
      <button
        type="submit"
        disabled={disabled}
        aria-label="送信"
        className={`
          transition-all duration-400 ease-out
          hover:-translate-y-0.5 hover:scale-110
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <HandDrawnCircle animate trigger={hover} duration={500}>
          <span>
            <SendIcon sx={{ fontSize: 30 }} />
          </span>
        </HandDrawnCircle>
      </button>
    </div>
  );
};

export const MobileScrollToTopButton: React.FC = () => {
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

  return (
    <div className="relative transition delay-75 duration-500 ease-in-out">
      <button
      onClick={handleClick}
      aria-label="ページの先頭へ戻る"
      className={`
        fixed bottom-5 right-8 bg-slate-700 rounded-full border-4 p-1 shadow-xl/40
      transition-all duration-400 ease-out hover:-translate-y-0.5 group-hover:scale-125
      ${active ? "opacity-100 cursor-pointer text-slate-100" : "opacity-0 pointer-events-none text-slate-400"}
      `}
      >
        <ArrowUpwardIcon sx={{ fontSize: 30 }} />  
      </button>
    </div>
  
  );
};

export const XButton: React.FC = () => (
    <a
        href="https://x.com/Natyam0_lol0845"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
    >
        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
            <path d="M22.162 0h-4.327l-5.835 8.26L6.03 0H0l8.44 12.252L0 24h4.327l6.001-8.496L17.97 24H24l-8.44-12.252L24 0zm-3.23 21.5l-6.932-9.81-6.932 9.81H2.77l7.23-10.24L2.77 2.5h2.298l6.932 9.81 6.932-9.81h2.298l-7.23 10.24 7.23 10.24h-2.298z"/>
        </svg>
        X (Twitter)
    </a>
);

export const GithubButton: React.FC = () => (
    <a
        href="https://github.com/Natyamo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
    >
        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.225v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
    </a>
);

export const MiniXButton: React.FC = () => (
    <a
        href="https://x.com/Natyam0_lol0845"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-slate-700 text-white"
    >
        <svg width="15" height="15" fill="currentColor"viewBox="0 0 24 24">
            <path d="M22.162 0h-4.327l-5.835 8.26L6.03 0H0l8.44 12.252L0 24h4.327l6.001-8.496L17.97 24H24l-8.44-12.252L24 0zm-3.23 21.5l-6.932-9.81-6.932 9.81H2.77l7.23-10.24L2.77 2.5h2.298l6.932 9.81 6.932-9.81h2.298l-7.23 10.24 7.23 10.24h-2.298z"/>
        </svg>
    </a>
);

export const MiniGithubButton: React.FC = () => (
    <a
        href="https://github.com/Natyamo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-2 py-2 bg-slate-700 text-white"
    >
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.225v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
    </a>
);