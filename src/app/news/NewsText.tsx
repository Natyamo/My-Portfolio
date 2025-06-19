import React, { FC } from "react";
import "@/styles/globals.css";

export const text1: FC = () => {
    return (
        <div>
            <p>
                初めてのサイト制作として、ポートフォリオサイトを制作してみました。
                <br/>
                プログラミングは覚えることがたくさんあって大変ですが、日々楽しみながら勉強しています。
            </p>
        </div>
    );
}

export const text2: FC = () => {
    return (
        <div>
            <p>
                近況やプログラミングを学んでいく上で印象に残ったことを紹介する「My News」をこのサイトに実装しました。
                <br/>
                これから定期的に投稿していこうと思います。
            </p>
        </div>
    );
}