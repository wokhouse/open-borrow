"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getItem = async (id: string) => {
  const res = await prisma.item.findUnique({
    where: {
      id,
    },
  });
  return res;
};
