"use client";

import React, { useState } from "react";
import ContactList from "./ContactList";

const AdminContactList = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [inputUser, setInputUser] = useState("");
    const [inputPass, setInputPass] = useState("");
    const [error, setError] = useState("");

    // .envの値はクライアントには直接渡せないため、ここでは値を直書きしています。
    // 本番環境ではAPI経由の認証やセッション管理を推奨します。
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "koyoute06bigin24";

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputUser === ADMIN_USER && inputPass === ADMIN_PASS) {
            setIsAuth(true);
            setError("");
        } else {
            setError("ユーザー名またはパスワードが違います。");
        }
    };

    if (!isAuth) {
        return (
            <div className="flex justify-center mt-20">
                <form onSubmit={handleLogin} className="bg-slate-700 p-8 rounded-xl space-y-4 w-80">
                    <h2 className="text-2xl font-bold mb-4 text-center">管理者ログイン</h2>
                    <div>
                        <label className="block mb-1">ユーザー名</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded"
                            value={inputUser}
                            onChange={e => setInputUser(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">パスワード</label>
                        <input
                            type="password"
                            className="w-full p-2 rounded"
                            value={inputPass}
                            onChange={e => setInputPass(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="text-red-400">{error}</div>}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-2">ログイン</button>
                </form>
            </div>
        );
    }

    return <ContactList />;
};

export default AdminContactList;