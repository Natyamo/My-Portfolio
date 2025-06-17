"use client"

import React, { useEffect, useState } from "react";
import { FC } from "react";

const ScrollToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl text-slate-400 bg-slate-700 border-2 border-slate-400
        shadow-lg transition-opacity duration-400 hover:text-slate-100 hover:bg-slate-800 hover:border-slate-100 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="トップへ戻る"
    >
    TOP
    </button>
    </div>
  );
};

export default ScrollToTopButton;