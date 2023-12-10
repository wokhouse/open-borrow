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
  await prisma.$transaction([
    prisma.itemAction.create({
      data: {
        action: "CHECK_OUT",
        name: name,
        itemId: id,
      },
    }),
    prisma.item.update({
      where: {
        id,
      },
      data: {
        state: "CHECKED_OUT",
      },
    }),
  ]);
  return;
};

export const returnItem = async (id: Item["id"]) => {
  return prisma.$transaction(async (tx) => {
    const item = await tx.item.update({
      where: {
        id,
      },
      include: {
        actions: {
          orderBy: {
            timestamp: "asc",
          },
        },
      },
      data: {
        state: "AVAILABLE",
      },
    });

    if (!item.actions[0]?.name)
      throw new Error("cannot find record of previous check-out!");

    const returnAction = await tx.itemAction.create({
      data: {
        action: "RETURN",
        name: item.actions[0].name,
        itemId: item.id,
      },
    });
    return returnAction;
  });
};

export const createScreen = async ({
  itemMeta,
  screenMeta,
}: {
  itemMeta: Item;
  screenMeta: Screen;
}) => {
  const itemPromise = await prisma.item.create({
    data: {
      ...itemMeta,
      screen: { create: screenMeta },
    },
  });
  return itemPromise;
};
