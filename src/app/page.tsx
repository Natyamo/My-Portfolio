import Image from "next/image";
import "@/styles/globals.css"
import TitleIcon from "@/components/TitleName/TitleIcon";
import { MyProfileText } from "@/components/MyProfile/MyProfileText";


export default function Home() {
  const langs = ["JavaScript", "React", "TypeScript", "Next.js", "Tailwindcss"]
  return (
    <div>
      <header className="px-6 py-4">
        <TitleIcon name="Natyamo" />
      </header>
      <main className="px-6 py-4">
        <MyProfileText name="Natyamo" career={2} langs={langs}/>
      </main>
    </div>
  );
}
