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
        <div className="md:ml-10 md:mt-15 text-center">
            <p>毎日！楽しく！プログラミングを勉強しています！</p>
            <span className="w-80 md:w-full flex justify-center items-center md:mt-5 md:ml-20 space-x-2">
                <p>
                    プログラミング歴： 
                    <strong className="md:mb-2 font-daruma1 md:text-[30px] text-2xl">{career}</strong>
                    <small> {getMonthOrYear(career)}</small>
                </p>
            </span>
        </div>
    )
}

export default TopText;