import { TopProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css";

const TopText: FC<TopProps> = props => {
    const { career } = props;

    const getMonthOrYear = (career?: number)=> {
        if (career === undefined) return "undefined";
        if (career < 12) return `${career} months`;
        const year = Math.floor(career / 12);
        if (career < 24) return `${year} year`;
        return `${year} years`;
    }

    return (
        <div className="ml-15 mt-15 text-[22px] font-raleway">
            <p>I enjoy learning programming every day!</p>
            <p className="mt-3">Programming Career：<strong className="text-2xl">{getMonthOrYear(career)}</strong></p>
        </div>
    )
}

export default TopText;