import React, { FC } from "react";
import "@/styles/globals.css";

const AboutMe: FC = () => {
    return (
        <div className="space-y-10">
            <section className="bg-slate-700/80 p-8 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                <div>
                    <h1 className="font-daruma1 text-7xl animate-gradatecolor">Hobby</h1>
                    <p className="mt-10 ml-5">
                        <strong className="text-4xl">love playing games !!!</strong>
                        <br />
                        <br />
                        It's my reason for living.
                        <br />
                        I like many genres of games such as RPG, MOBA, and simulation games.
                    </p>
                </div>
            </section>

            <section className="bg-slate-700/80 p-8 pb-9 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                <div>
                    <h1 className="font-daruma1 text-7xl animate-gradatecolor">Programming</h1>
                    <div className="mt-10 ml-5">
                        <p>The reason I started was because ...</p>
                        <p className="flex justify-end mr-10 font-bold text-4xl">It looked like fun !!!</p>
                    </div>
                    
                </div>
            </section>

            <section className="bg-slate-700/80 p-8 rounded-4xl border-4 border-slate-800/40 shadow-xl/40">
                <div>
                    <h1 className="font-daruma1 text-7xl animate-gradatecolor">The future</h1>
                    <div>
                        <p className="mt-10 ml-5">Introduce topics of your own interest on a site of your own creation.</p>
                    </div>

                    <div>
                        <p className="ml-5">Make your own life easier with applications of your own creation.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;