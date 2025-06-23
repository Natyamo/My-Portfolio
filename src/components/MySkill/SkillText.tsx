import React, { FC } from "react";
import "@/styles/globals.css";

const SkillText: FC = () => {
    return (
        <div className="bg-slate-700/80 mt-20 p-8 rounded-4xl border-4 border-slate-800/40 shadow-xl/40 space-y-5">
            <p>HTML... 理解していない部分はまだあるが、サイトを制作するために必要な知識は身についている。</p>
            <p>JavaScript... イベント関数については理解できていない部分が多いと感じる。</p>
            <span>
                <p>React... コンポーネントというものが便利すぎて、初めて知ったときとても感動した。</p>
                <p className="ml-20">便利なライブラリが把握しきれないほど大量にあるのも React の魅力。</p>
            </span>         
            <span>
                <p className="mt-5">TypeScript... 型定義などの前準備が大変な部分はあるが</p>
                <p className="ml-33">一度定義をしてしまえば、タイポや型定義を誤ってしまっている部分を視覚的にもわかりやすく表示してくれるので</p>
                <p className="ml-33">初心者としては便利だと感じる。</p>
            </span>
            <span>
                <p className="mt-5">Next.js... 他の開発環境で開発をしたことがないので、比較はできないが</p>
                <p className="ml-23">初心者でも体感で便利だと感じるほど、細かい面で開発者側をサポートしてくれる。</p>
            </span>
            <span>
                <p className="mt-5">Tailwindcss... CSS に関しては Tailwindcss を多用している。</p>
                <p className="ml-34">記述が直感的で楽なので、使い勝手が非常に良い。</p>
            </span>
            <div className="mt-10">
                <span className="space-y-1">
                    <p>And more... その他にも、Git, GitHub, Docker, Storybook など</p>
                    <p className="ml-32">学ぶべき技術は多いが、これからのこのポートフォリオサイトに投稿する制作物を通して</p>
                    <p className="ml-32">少しずつ、丁寧に、学んでいこうを思う。</p>
                </span>    
            </div>         
        </div>
    );
}

export default SkillText;