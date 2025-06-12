import { TextProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css"

export const MyProfileText: FC<TextProps> = props => {
    const { name, career, langs } = props;

    const getMonthOrYear = (career?: number)=> {
        if (career === undefined) return "不明";
        if (career < 12) return `${career}ヶ月`;
        const year = Math.floor(career / 12);
        if (career < 24) return `${year}年`;
        return `${year}年以上`;
    }
    return (
        <div className=" bg-slate-800 rounded-lg">
            <div className="px-5 py-3">
                <h2 className="text-2xl font-anton">About</h2>
                <p className="mt-5 mx-8">{name}です。日々楽しみながらプログラミングを勉強しています。</p>
                <div className="mx-8">
                    <p className="mt-5">・　プログラミング歴：{getMonthOrYear(career)}</p>
                    <div>
                        <p className="mt-5">・　学習している言語：</p>
                        <div className="flex mx-18 space-x-4">
                            {langs?.map((lang, index) => (
                                <span key={index}>{lang}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mt-5">・　今後やっていきたいこと：</p>
                        <ul className="mt-2 mx-10">
                            <li>・　自分が興味を持ったトピックを自作のサイトで紹介</li>
                            <li className="mt-1">・　自分の日常生活のＱＯＬが上がるような便利アプリの開発</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}