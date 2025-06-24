"use client";

import React, { FC } from "react";
import "@/styles/globals.css";
import { Formbutton } from "@/components/Navigation/NaviButton";

// ...existing code...
const ContactForm: FC = () => {
    // フォーム送信ハンドラ
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };
        await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        // 送信完了メッセージ等をここで表示
        alert("送信が完了しました。");
        form.reset();
    };

    return (
        <div className="m-30">
            <section className="bg-slate-700/80 p-8 rounded-4xl border-4 border-slate-800/40 shadow-xl/40 space-y-4">
                <h2 className="mb-8 font-daruma1 text-7xl animate-gradatecolor">Contact</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-daruma1">Name</label>
                        <input name="name" type="text" className="w-full bg-slate-500 border-3 border-slate-700 rounded-lg" required />
                    </div>
                    <div>
                        <label className="block font-daruma1">Email</label>
                        <input name="email" type="email" className="w-full bg-slate-500 border-3 border-slate-700 rounded-lg" required />
                    </div>
                    <div>
                        <label className="block font-daruma1">Message</label>
                        <textarea name="message" className="w-full h-30 bg-slate-500 border-3 border-slate-700 rounded-lg" required></textarea>
                    </div>
                    <Formbutton />
                </form>
            </section>
        </div>
    );
}
// ...existing code...

export default ContactForm;