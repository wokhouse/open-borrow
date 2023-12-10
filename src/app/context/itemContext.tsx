"use client";
import {
  Component,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

import { Item } from "@prisma/client";

interface ItemContextDefinition {
  setItemState: (item: Item) => void;
  setID: (id: string) => void;
  item: Partial<Item>;
}

export const ItemContext = createContext<ItemContextDefinition>({
  setItemState: (item) => {
    throw new Error("item context is not initualized!");
  },
  setID: (item) => {
    throw new Error("item context is not initualized!");
  },
  item: {},
});

export const ItemProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const storageKey = "itemContextData";
  const storedRawData = sessionStorage.getItem(storageKey);
  let storedData = {};
  try {
    if (storedRawData) storedData = JSON.parse(storedRawData);
  } catch {
    console.warn("failed to rehydrate context");
  }

  const [itemState, setItemState] = useState<Partial<Item>>(storedData);
  const setID = (id: string) => setItemState({ id });

  useEffect(
    () => sessionStorage.setItem(storageKey, JSON.stringify(itemState)),
    [itemState]
  );

  return (
    <ItemContext.Provider value={{ item: itemState, setItemState, setID }}>
      {children}
    </ItemContext.Provider>
  );
};
