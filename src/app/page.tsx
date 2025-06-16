import Image from "next/image";
import "@/styles/globals.css";
import TopHome from "@/components/TopHome/TopHome";

export default function Home() {
  return (
    <div>
      <TopHome name="Natyamo" career={2} />
    </div>
  );
}
