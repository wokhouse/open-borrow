import { z } from 'zod';
import { ItemCreateWithoutActionsInputObjectSchema } from './ItemCreateWithoutActionsInput.schema';
import { ItemUncheckedCreateWithoutActionsInputObjectSchema } from './ItemUncheckedCreateWithoutActionsInput.schema';
import { ItemCreateOrConnectWithoutActionsInputObjectSchema } from './ItemCreateOrConnectWithoutActionsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutActionsInput> = z
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
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutActionsInputObjectSchema = Schema;
