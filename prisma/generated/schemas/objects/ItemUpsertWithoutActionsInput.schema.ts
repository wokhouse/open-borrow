import { z } from 'zod';
import { ItemUpdateWithoutActionsInputObjectSchema } from './ItemUpdateWithoutActionsInput.schema';
import { ItemUncheckedUpdateWithoutActionsInputObjectSchema } from './ItemUncheckedUpdateWithoutActionsInput.schema';
import { ItemCreateWithoutActionsInputObjectSchema } from './ItemCreateWithoutActionsInput.schema';
import { ItemUncheckedCreateWithoutActionsInputObjectSchema } from './ItemUncheckedCreateWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutActionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutActionsInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutActionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutActionsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutActionsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutActionsInputObjectSchema = Schema;
