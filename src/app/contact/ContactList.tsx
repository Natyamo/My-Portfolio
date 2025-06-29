"use client";

import React, { FC, useEffect, useState } from "react";
import "@/styles/globals.css";

type Contact = {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
};

const ContactList: FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            const res = await fetch("/api/contact", { method: "GET" });
            if (res.ok) {
                const data = await res.json();
                setContacts(data);
            }
            setLoading(false);
        };
        fetchContacts();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">読み込み中...</div>;
    }

    return (
        <div className="flex justify-center md:m-30">
            <section className="w-80 md:w-full bg-slate-700/80 p-8 pt-3 pb-3 mt-10 mb-20 rounded-4xl border-4 border-slate-800/40 shadow-xl/40 space-y-4">
                <h2 className="text-4xl md:text-6xl">お問い合わせ一覧</h2>
                <div className="space-y-4">
                    {contacts.length === 0 ? (
                        <div className="mt-10">お問い合わせはありません。</div>
                    ) : (
                        contacts.map((contact) => (
                            <div key={contact.id} className="bg-slate-600 rounded-lg p-4 border border-slate-500">
                                <div><span className="font-bold">名前:</span> {contact.name}</div>
                                <div><span className="font-bold">メール:</span> {contact.email}</div>
                                <div><span className="font-bold">メッセージ:</span> {contact.message}</div>
                                <div className="text-xs text-slate-300 mt-2">{new Date(contact.createdAt).toLocaleString()}</div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default ContactList;