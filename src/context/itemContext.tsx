"use client";
import {
  Component,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Item } from "@prisma/client";
import { CircularProgress } from "@mui/joy";

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
  const [itemState, setItemState] = useState<Partial<Item>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const storedRawData = sessionStorage.getItem(storageKey);
      setItemState(JSON.parse(storedRawData || "{}"));
    } catch {
      console.warn("failed to rehydrate context");
    }
    setMounted(true);
  }, []);

  const setID = (id: string) => setItemState({ id });

  useEffect(() => {
    if (mounted === true) {
      sessionStorage.setItem(storageKey, JSON.stringify(itemState));
    }
  }, [itemState, mounted]);

  return (
    <ItemContext.Provider value={{ item: itemState, setItemState, setID }}>
      {mounted ? children : <CircularProgress />}
    </ItemContext.Provider>
  );
};
