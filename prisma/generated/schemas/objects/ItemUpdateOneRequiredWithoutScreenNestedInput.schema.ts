import { z } from 'zod';
import { ItemCreateWithoutScreenInputObjectSchema } from './ItemCreateWithoutScreenInput.schema';
import { ItemUncheckedCreateWithoutScreenInputObjectSchema } from './ItemUncheckedCreateWithoutScreenInput.schema';
import { ItemCreateOrConnectWithoutScreenInputObjectSchema } from './ItemCreateOrConnectWithoutScreenInput.schema';
import { ItemUpsertWithoutScreenInputObjectSchema } from './ItemUpsertWithoutScreenInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutScreenInputObjectSchema } from './ItemUpdateWithoutScreenInput.schema';
import { ItemUncheckedUpdateWithoutScreenInputObjectSchema } from './ItemUncheckedUpdateWithoutScreenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutScreenNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutScreenInputObjectSchema),
          z.lazy(() => ItemUncheckedCreateWithoutScreenInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutScreenInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => ItemUpsertWithoutScreenInputObjectSchema).optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutScreenInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutScreenInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutScreenNestedInputObjectSchema = Schema;
