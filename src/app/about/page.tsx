import React, { FC } from "react";
import "@/styles/globals.css";
import AboutMe from "./AboutMe";
import NavButton from "@/components/NavButton/NavButton";

const AboutPage: FC = () => {
    return (
        <div>
            <header>
                <NavButton />
            </header>
            <AboutMe />
        </div>
    );
}

export default AboutPage;