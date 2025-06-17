import { TopProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css";

const TopText: FC<TopProps> = props => {
    const { career } = props;

    const getMonthOrYear = (career?: number)=> {
        if (career === undefined) return "undefined";
        if (career < 12) return `months`;
        const year = Math.floor(career / 12);
        if (career < 24) return `year`;
        return `${year} years`;
    }

    return (
        <div className="ml-10 mt-15 font-raleway">
            <p>I enjoy learning programming every day!</p>
            <ul className="flex mt-3 space-x-4">
                <li className="mt-2">Programming Career : </li>
                <li className="text-4xl">{career}</li>
                <li className="mt-2">{getMonthOrYear(career)}</li>
            </ul>
        </div>
    )
}

export default TopText;