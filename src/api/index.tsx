"use server";
import { PrismaClient, Screen, Item, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getItem = async (id: string) => {
  const res = await prisma.item.findUnique({
    where: {
      id,
    },
  });
  return res;
};

export const getItemInclude = async (
  id: string,
  include: Prisma.ItemInclude
) => {
  const res = await prisma.item.findUnique({
    where: {
      id,
    },
    include,
  });
  return res;
};

export const getAllItems = async () => {
  const res = await prisma.item.findMany();
  return res;
};

export const createItem = async (item: Item) =>
  prisma.item.create({ data: { ...item, department: "TEX" } });

export const checkoutItem = async (id: Item["id"], name: string) => {
  await prisma.itemAction.create({
    data: {
      action: "CHECK_OUT",
      name: name,
      itemId: id,
    },
  });
  await prisma.item.update({
    where: {
      id,
    },
    data: {
      state: "CHECKED_OUT",
    },
  });
  return;
};
export const returnItem = async (id: Item["id"]) => {
  const itemPromise = prisma.item.update({
    where: {
      id,
    },
    data: {
      state: "AVAILABLE",
    },
  });
  const itemHistory = await prisma.itemAction.findFirst({
    where: {
      itemId: id,
      action: "CHECK_OUT",
    },
    orderBy: {
      timestamp: "asc",
    },
  });
  if (!itemHistory || !("name" in itemHistory))
    throw new Error("cannot find record of previous check-out!");
  const actionPromise = prisma.itemAction.create({
    data: {
      action: "RETURN",
      name: itemHistory.name,
      itemId: id,
    },
  });

  await Promise.all([itemPromise, actionPromise]);
  return;
};

export const createScreen = async ({
  itemMeta,
  screenMeta,
}: {
  itemMeta: Item;
  screenMeta: Screen;
}) => {
  const itemPromise = prisma.item.create({
    data: itemMeta,
  });
  const screenPromise = prisma.screen.create({
    data: screenMeta,
  });
  await Promise.all([itemPromise, screenPromise]);
  return;
};
