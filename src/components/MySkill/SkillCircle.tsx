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

const SkillCircle: FC<SkillCircleProps> = ({
    percent,
    label,
    colors = DEFAULT_COLORS,
}) => {
    const circleRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentDegree, setCurrentDegree] = useState(0);
    const targetDegree = percent * 3.6;

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );
        if (circleRef.current) observer.observe(circleRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let frame = 0;
        const totalFrames = ANIMATION_DURATION * FPS;
        const step = targetDegree / totalFrames;

        setCurrentDegree(0);
        const interval = setInterval(() => {
            frame++;
            setCurrentDegree((prev) => {
                const next = prev + step;
                if (next >= targetDegree) {
                    clearInterval(interval);
                    return targetDegree;
                }
                return next;
            });
        }, 1000 / FPS);

        return () => clearInterval(interval);
    }, [isVisible, targetDegree]);

    const gradient = `conic-gradient(
        ${colors.main} 0deg, 
        ${colors.main} ${currentDegree - 1}deg, 
        ${colors.accent} ${currentDegree}deg, 
        ${colors.bg} ${currentDegree + 1}deg, 
        ${colors.bg} 360deg
    )`;

    return (
        <section className="relative inline-block w-60 h-60 rounded-full border-4 border-slate-800/30 bg-slate-700">
            <div
                ref={circleRef}
                className="absolute left-0 top-0 w-full h-full rounded-full"
                style={{
                    background: gradient,
                }}
            >
                <span className="font-bold text-[30px]">{label}</span>
                <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] inline-block w-30 h-30 rounded-full bg-slate-600 border-3 border-slate-900/50">
                    <p className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[30px]">{percent}%</p>
                </div>
            </div>
        </section>
    );
};

export default SkillCircle;