import React, { FC } from "react";
import "@/styles/globals.css";
import SkillCircle from "@/components/MySkill/SkillCircle";
import SkillText from "@/components/MySkill/SkillText";

const MySkill: FC = () => {
    return (
        <div className="mt-50 p-30">
            <h1 className="flex justify-center font-daruma1 text-7xl animate-gradatecolor">My Skill</h1>
            <div className="mt-20 flex justify-center items-center space-x-20">
                <SkillCircle
                    percent={80}
                    label="HTML"
                    colors={{
                        main: "#f59e42",
                        accent: "#dd8c22",
                        bg: "#334155",
                    }}
                />
                <SkillCircle
                    percent={70}
                    label="Javascript"
                    colors={{
                        main: "#de5921",
                        accent: "#dd5a22",
                        bg: "#334155",
                    }}
                />
                <SkillCircle
                    percent={60}
                    label="React"
                    colors={{
                        main: "#38bdf8",
                        accent: "#34bfe9",
                        bg: "#334155",
                    }}
                />
            </div>
            <div className="mt-20 flex justify-center items-center space-x-20">
                <SkillCircle
                    percent={60}
                    label="Typescript"
                    colors={{
                        main: "#1f92d0",
                        accent: "#1f92d0",
                        bg: "#334155",
                    }}
                />
                <SkillCircle
                    percent={50}
                    label="Next.js"
                    colors={{
                        main: "#1825ad",
                        accent: "#1825ad",
                        bg: "#334155",
                    }}
                />
            </div>
            <div className="flex justify-center">
                <SkillText />
            </div>
        </div>
    );
};

export default MySkill;