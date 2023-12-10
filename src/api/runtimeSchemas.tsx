import { z } from "zod";

const ItemState = z.enum(["AVAILABLE", "CHECKED_OUT", "DUE", "DAMAGED"]);
const Department = z.enum(["TEX"]);
const ItemType = z.enum(["SL"]);
const ActionType = z.enum(["CHECK_OUT", "RETURN", "DAMAGED"]);

export const ItemAction = z.object({
  id: z.number(),
  timestamp: z.coerce.date(),
  action: ActionType,
  name: z.string(),
  dueDate: z.coerce.date().optional(),
});

export const Item = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  state: ItemState,
  department: Department,
  type: ItemType,
  actions: z.array(ItemAction).optional(),
});

export const Screen = z.object({
  itemId: z.string(),
  meshCount: z.number(),
  screenNumber: z.number(),
});

export const FindItemAction = ItemAction.and(
  z.object({
    itemId: z.string(),
  })
);
