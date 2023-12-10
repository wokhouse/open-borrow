import { z } from 'zod';
import { ItemUpdateWithoutScreenInputObjectSchema } from './ItemUpdateWithoutScreenInput.schema';
import { ItemUncheckedUpdateWithoutScreenInputObjectSchema } from './ItemUncheckedUpdateWithoutScreenInput.schema';
import { ItemCreateWithoutScreenInputObjectSchema } from './ItemCreateWithoutScreenInput.schema';
import { ItemUncheckedCreateWithoutScreenInputObjectSchema } from './ItemUncheckedCreateWithoutScreenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutScreenInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutScreenInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutScreenInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutScreenInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutScreenInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutScreenInputObjectSchema = Schema;
