import { z } from 'zod';
import { ItemCreateWithoutActionsInputObjectSchema } from './ItemCreateWithoutActionsInput.schema';
import { ItemUncheckedCreateWithoutActionsInputObjectSchema } from './ItemUncheckedCreateWithoutActionsInput.schema';
import { ItemCreateOrConnectWithoutActionsInputObjectSchema } from './ItemCreateOrConnectWithoutActionsInput.schema';
import { ItemUpsertWithoutActionsInputObjectSchema } from './ItemUpsertWithoutActionsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutActionsInputObjectSchema } from './ItemUpdateWithoutActionsInput.schema';
import { ItemUncheckedUpdateWithoutActionsInputObjectSchema } from './ItemUncheckedUpdateWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneWithoutActionsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutActionsInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutActionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutActionsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ItemUpsertWithoutActionsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ItemUpdateWithoutActionsInputObjectSchema),
        z.lazy(() => ItemUncheckedUpdateWithoutActionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ItemUpdateOneWithoutActionsNestedInputObjectSchema = Schema;
