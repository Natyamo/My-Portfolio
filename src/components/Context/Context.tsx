"use client";

import React, { createContext, useContext } from "react";
import { TopProps } from "@/types/type";
import { useMemo } from "react";

const SectionsContext = createContext<TopProps>({ sections: [], name: "" }); //このコードのContextの初期値に追加したいprops(型)を記述

export const useSections = () => useContext(SectionsContext);

// 2. Providerのpropsに新プロパティを追加
export const SectionsProvider: React.FC<{
  children: React.ReactNode;
  sections: TopProps["sections"];
  name: TopProps["name"];
}> = ({ children, sections, name }) => {
  const value = useMemo(() => ({ sections, name }), [sections, name]);

  return (
    <SectionsContext.Provider value={value}>
      {children}
    </SectionsContext.Provider>
  );
};