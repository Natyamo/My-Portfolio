import React, { FC } from "react";
import "@/styles/globals.css";
import SkillBar from "./SkillBar";

const skills = [
    {
        percent: 80,
        label: "HTML",
        colors: {
            main: "#f59e42",
            accent: "#dd8c22",
            bg: "#334155",
        },
    },
    {
        percent: 70,
        label: "Javascript",
        colors: {
            main: "#de5921",
            accent: "#dd5a22",
            bg: "#334155",
        },
    },
    {
        percent: 60,
        label: "React",
        colors: {
            main: "#38bdf8",
            accent: "#34bfe9",
            bg: "#334155",
        },
    },
    {
        percent: 60,
        label: "Typescript",
        colors: {
            main: "#1f92d0",
            accent: "#1f92d0",
            bg: "#334155",
        },
    },
    {
        percent: 50,
        label: "Next.js",
        colors: {
            main: "#1825ad",
            accent: "#1825ad",
            bg: "#334155",
        },
    },
];

const MyMobileSkillBar: FC = () => {
    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h1 className="flex justify-center font-daruma1 text-5xl md:text-7xl animate-gradatecolor">My Skill</h1>
            <div className="mt-10 flex flex-col">
                {skills.map((skill) => (
                    <SkillBar
                        key={skill.label}
                        percent={skill.percent}
                        label={skill.label}
                        colors={skill.colors}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyMobileSkillBar;