import { TopProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css";

const TopText: FC<TopProps> = () => {
    
    //careerの変更はここで行う
    const career = 3;

    const getMonthOrYear = (career?: number)=> {
        if (career === undefined) return "undefined";
        if (career < 12) return `ヶ月`;
        const year = Math.floor(career / 12);
        if (career < 24) return `年`;
        return `${year} 年以上`;
    }

    return (
        <div className="ml-10 mt-15 text-center">
            <p>毎日！楽しく！プログラミングを勉強しています！</p>
            <ul className="flex items-center mt-5 ml-20 space-x-2">
                <li>プログラミング歴： </li>
                <li className="mb-2 font-daruma1 text-[30px]">{career}</li>
                <li><small>{getMonthOrYear(career)}</small></li>
            </ul>
        </div>
    )
}

export default TopText;