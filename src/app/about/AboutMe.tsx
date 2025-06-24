import React, { FC } from "react";
import "@/styles/globals.css";

const AboutMe: FC = () => {
    return (
        <div className="mt-60 space-y-10">
                <section className="flex justify-center items-center">
                    <div className="bg-slate-700/80 p-8 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                        <h1 className="font-daruma1 text-7xl animate-gradatecolor">Hobby</h1>
                        <span className="text-center space-y-2">
                            <p className="mt-10 mb-10"><strong className="text-4xl">ゲームが大好き !!!</strong></p>
                            <p>私の生きる理由といっても過言ではありません。</p>
                            <p>好きなゲームのジャンルは、RPG やシミュレーション系</p>
                            <p>対戦系のゲームでは MOBA が好きです。</p>
                           <p>また、Twitch や Youtube などの配信サイトでの様々な方のゲーム実況もよく視聴しています。</p>
                        </span>
                    </div>
                </section>
            <div className="flex justify-center items-start space-x-5">
                <section className="flex justify-center items-center">
                    <div className="bg-slate-700/80 p-8 pb-9 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                        <h1 className="font-daruma1 text-7xl animate-gradatecolor">Programming</h1>
                        <div className="mt-15 ml-5">
                            <p>私がプログラミングを始めたきっかけは...</p>
                            <p className="flex justify-center mt-10 mb-10 font-bold text-4xl">楽しそうだったから!!!</p>
                            <span className="text-center space-y-2">
                                <p>一人でも様々なサイトや便利なアプリを作成できるのがプログラミングの面白いところ。</p>
                                <p>最初は Youtube でいろんな方が投稿されている Javascript や React のチュートリアル講座の視聴から始まり</p>
                                <p>現在は書店で参考書を購入するなどして勉強を進めています。</p>                            
                            </span>                              
                        </div>                    
                    </div>
                </section>
                <section className="flex justify-center items-center">
                    <div className="bg-slate-700/80 p-8 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                        <h1 className="font-daruma1 text-7xl animate-gradatecolor">The future</h1>
                        <div className="space-y-3">
                            <p className="mt-10 ml-5">・自分が興味を持ったトピックを自作のサイトで紹介したい !!!</p>
                            <p className="ml-5">・<abbr>QOL</abbr><small> (Quality Of Life)</small> が上がるようなアプリを自作したい !!!</p>
                        </div>
                    </div>
                </section>
            </div>        
        </div>
    );
}

export default AboutMe;