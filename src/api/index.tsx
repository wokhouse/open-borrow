"use server";
import { PrismaClient, Screen, Item } from "@prisma/client";

const prisma = new PrismaClient();

export const getItem = async (id: string) => {
  const res = await prisma.item.findUnique({
    where: {
      id,
    },
  });
  return res;
};

export const createScreen = async ({
  itemMeta,
  screenMeta,
}: {
  itemMeta: Item;
  screenMeta: Screen;
}) => {
  const itemRes = await prisma.item.create({
    data: itemMeta,
  });
  const screenRes = await prisma.screen.create({
    data: screenMeta,
  });
  return [itemRes, screenRes];
};
