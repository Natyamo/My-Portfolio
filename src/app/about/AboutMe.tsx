import React, { FC } from "react";
import "@/styles/globals.css";

const AboutMe: FC = () => {
    return (
        <div>
            <section>
                <h1>Hobby</h1>
                <p>
                    Playing Games
                    <br />
                    It's my reason for living.
                    <br />
                    I like many genres of games such as RPG, MOBA, and simulation games.
                </p>
            </section>

            <section>
                <h1>Programming</h1>
                <p>
                    The reason I started was because...
                    <br />
                    it looked like fun!!!
                </p>
            </section>

            <section>
                <h1>The future</h1>
                <div>
                    <p>Introduce topics of your own interest on a site of your own creation.</p>
                </div>

                <div>
                    <p>Make your own life easier with applications of your own creation.</p>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;