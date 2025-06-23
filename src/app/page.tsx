import Image from "next/image";
import "@/styles/globals.css";
import { TopHome } from "@/components/TopHome/TopHome";
import AboutMe from "./about/AboutMe";
import NavButton from "@/components/Navigation/NavigationBar";
import MySkill from "./skill/MySkill";

export default function Home() {
  return (
    <div>
      <header className="sticky top-1 z-50">
        <NavButton />
      </header>
      <TopHome />
      <div id="about" className="relative flex justify-center">
        <AboutMe />
      </div>
      <div id="skill">
        <MySkill />
      </div>
    </div>
  );
}
