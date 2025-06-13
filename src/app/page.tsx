import Image from "next/image";
import "@/styles/globals.css";
import TopProfile from "@/components/TopProfile/TopProfile";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-700 py-10 m-2"></div>
      <div className="flex justify-center items-center py-8 m-2">
        <TopProfile name="Natyamo" career={2} />
      </div>
    </div>
  );
}
