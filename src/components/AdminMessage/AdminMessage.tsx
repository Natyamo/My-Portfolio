"use client";
import { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/contact")
      .then(res => res.json())
      .then(setMessages);
  }, []);

  return (
    <div>
      <h1>お問い合わせ一覧</h1>
      <ul>
        {messages.map(msg => (
          <li key={msg.id} className="mb-4 p-2 border rounded">
            <div><b>日時:</b> {new Date(msg.createdAt).toLocaleString()}</div>
            <div><b>名前:</b> {msg.name}</div>
            <div><b>メール:</b> {msg.email}</div>
            <div><b>内容:</b> {msg.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}