"use client";
import { Component, ReactNode, createContext, useState } from "react";

import { Item } from "@prisma/client";

const ItemContext = createContext({});

export const ItemProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [itemState, setItemState] = useState<Partial<Item>>({});
  return (
    <ItemContext.Provider value={{ ...itemState, setItemState }}>
      {children}
    </ItemContext.Provider>
  );
};
