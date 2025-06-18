import Image from "next/image";
import "@/styles/globals.css";
import { TopHome } from "@/components/TopHome/TopHome";
import AboutMe from "./about/AboutMe";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

export default function Home() {
  return (
    <div>
      <TopHome />
      <div id="about" className="relative flex justify-center">
        <AboutMe />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
