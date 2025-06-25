import React, { FC } from "react";
import "@/styles/globals.css";

const AboutMe: FC = () => {
    return (
        <div className="flex-col md:flex md:mt-20 space-y-10">
                <section className="flex justify-center items-center">
                    <div className="bg-slate-700/80 p-8 pt-3 md:pt-0 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                        <h1 className="font-daruma1 text-5xl md:text-7xl animate-gradatecolor">
                            Hobby
                        </h1>
                        <div className="text-center space-y-2">
                            <p className="mt-5 md:mt-10 mb-5 md:mb-10">
                                <span className="pl-5 pr-5 font-anton text-3xl md:text-4xl border-b-3 border-slate-300">
                                    I love games !!!
                                </span>
                            </p>
                            <div className="text-[14px] md:text-2xl space-y-2"> 
                                <p className="border-b-1 border-slate-400">私の生きる理由といっても過言ではありません。</p>                               
                                <p className="border-b-1 border-slate-400">好きなゲームのジャンルは、RPG やシミュレーション系</p>
                                <p className="border-b-1 border-slate-400">対戦系のゲームでは MOBA が好きです。</p>                          
                                <p className="border-b-1 border-slate-400">また、Twitch や Youtube などの配信サイトでの</p>                               
                                <p className="border-b-1 border-slate-400">様々な方のゲーム実況もよく視聴しています。</p>
                            </div>
                        </div>
                    </div>
                </section>
            <div className="md:flex justify-center items-start md:space-x-5 space-y-5">
                <section className="flex justify-center items-center">
                    <div className="bg-slate-700/80 p-5 md:p-8 pb-9 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                        <h1 className="font-daruma1 text-5xl md:text-7xl animate-gradatecolor">
                            Programming
                        </h1>
                        <div className="mt-10 md:mt-15">
                            <p>私がプログラミングを始めたきっかけは...</p>
                            <p className="flex justify-center w-80 md:w-full">
                                <span className="pl-10 pr-10 mt-10 mb-10 pb-2 font-anton text-2xl md:text-4xl border-b-3 border-slate-300">
                                楽しそうだったから!!!
                                </span>
                            </p>
                            
                            <div className="text-[14px] md:text-2xl text-center md:text-center space-y-2">
                                <p className="border-b-1 border-slate-400">一人でも様々なサイトやアプリを作成できるのが</p>
                                <p className="border-b-1 border-slate-400">プログラミングの面白いところ。</p>
                                <p className="border-b-1 border-slate-400">最初は Youtube でいろんな方が投稿されている</p>
                                <p className="border-b-1 border-slate-400">Javascript や React 講座の視聴から始まり、</p>
                                <p className="border-b-1 border-slate-400">現在は書店で参考書を購入するなどして</p>
                                <p className="border-b-1 border-slate-400">勉強を進めています。</p>                            
                            </div>                              
                        </div>                    
                    </div>
                </section>
                <section className="flex justify-center items-center">
                    <div className="bg-slate-700/80 p-5 md:p-8 pb-9 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                        <h1 className="font-daruma1 text-5xl md:text-7xl animate-gradatecolor">The future</h1>
                        <div className="mt-10 text-[20px] md:text-2xl md:text-center space-y-2">
                            <p className="border-b-1 border-slate-400">‣ 自分が興味を持ったトピックを</p>
                            <p className="border-b-1 border-slate-400">自作のサイトで紹介したい !!!</p>
                            <p className="border-b-1 border-slate-400">‣ <abbr>QOL</abbr><small> (Quality Of Life)</small> が上がる</p>
                            <p className="border-b-1 border-slate-400">ようなアプリを自作したい !!!</p>
                        </div>
                    </div>
                </section>
            </div>        
        </div>
    );
}

export default AboutMe;