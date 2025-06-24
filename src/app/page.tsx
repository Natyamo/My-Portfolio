import "@/styles/globals.css";
import { TopHome } from "@/components/TopHome/TopHome";
import AboutMe from "./about/AboutMe";
import NavButton from "@/components/Navigation/NavigationBar";
import MySkill from "./skill/MySkill";
import ContactForm from "./contact/Contact";

export default function Home() {
  return (
    <div>
      <header className="sticky top-1 z-50">
        <NavButton />
      </header>
      <TopHome />
      <div id="about" className="relative m-40 p-5">
        <AboutMe />
      </div>
      <div id="skill">
        <MySkill />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
