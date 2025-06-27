import "@/styles/globals.css";
import { TopHome } from "@/components/TopHome/TopHome";
import AboutMe from "./about/AboutMe";
import NavButton from "@/components/Navigation/NavigationBar";
import MySkill from "./skill/MySkill";
import ContactForm from "./contact/Contact";
import NaviMobile from "@/components/Navigation/NaviMobile";
import { MobileScrollToTopButton } from "@/components/Navigation/NaviButton";
import MyMobileSkillBar from "@/components/MySkill/MobileMySkill";
export default function Home() {
  return (
    <div>
      <header className="sticky top-8 z-50">
        <NavButton />
        <NaviMobile />
      </header>
      <div>
        <TopHome />
      </div>
      <div id="about" className="p-10">
        <AboutMe />
      </div>
      <div id="skill" className="hidden md:block">
        <MySkill />
      </div>
      <div id="skill" className="md:hidden">
        <MyMobileSkillBar />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <div className="md:hidden">
        <MobileScrollToTopButton />
      </div>
    </div>
  );
}
