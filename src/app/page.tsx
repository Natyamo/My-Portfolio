import Image from "next/image";
import TitleIcon from "@/components/Title/TitleIcon";
import "@/styles/globals.css"

export default function Home() {
  return (
    <div>
      <header className="px-6 py-4">
        <TitleIcon title="My Portfolio" name="なちゃも" />
      </header>
    </div>
  );
}
