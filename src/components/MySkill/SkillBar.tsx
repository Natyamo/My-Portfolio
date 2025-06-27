"use client";

import React, { FC, useRef, useEffect, useState } from "react";
import "@/styles/globals.css";
import { SkillCircleProps } from "@/types/type";

const ANIMATION_DURATION = 0.7; // 秒
const FPS = 60; // フレームレート

const DEFAULT_COLORS = {
    main: "#38bdf8",
    accent: "#7dd3fc",
    bg: "#334155",
};

const SkillBar: FC<SkillCircleProps> = ({
    percent,
    label,
    colors = DEFAULT_COLORS,
}) => {
    const barRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentPercent, setCurrentPercent] = useState(0);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );
        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const totalFrames = ANIMATION_DURATION * FPS;
        const step = percent / totalFrames;

        setCurrentPercent(0);
        const interval = setInterval(() => {
            setCurrentPercent((prev) => {
                const next = prev + step;
                if (next >= percent) {
                    clearInterval(interval);
                    return percent;
                }
                return next;
            });
        }, 1000 / FPS);

        return () => clearInterval(interval);
    }, [isVisible, percent]);

    return (
        <section className="my-4">
            <span className="font-bold text-[20px]">{label}</span>
            <div className="relative w-full h-10 rounded bg-slate-700 border-2 border-slate-800/30 mt-2">
                <div
                    ref={barRef}
                    className="h-full rounded transition-all duration-300"
                    style={{
                        width: `${currentPercent}%`,
                        background: `linear-gradient(90deg, ${colors.main} 0%, ${colors.accent} 100%)`,
                        minWidth: "8px",
                    }}
                >
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[18px] font-bold text-white drop-shadow">
                        {Math.round(currentPercent)}%
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SkillBar;