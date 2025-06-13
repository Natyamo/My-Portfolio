import { TopProps } from "@/types/type";
import { FC } from "react";
import "@/styles/globals.css"

export const MyProfileText: FC<TopProps> = props => {
    const { name, career, langs } = props;

    
    return (
        <div>
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
                            <li className="mt-1">・　自分の日常生活の QOL <small>( Quality Of Life )</small> が上がるような便利アプリの開発</li>
                        </ul>
            </div>
        </div>
    );
}