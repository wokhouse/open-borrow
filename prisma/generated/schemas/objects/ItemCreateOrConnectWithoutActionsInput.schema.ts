import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutActionsInputObjectSchema } from './ItemCreateWithoutActionsInput.schema';
import { ItemUncheckedCreateWithoutActionsInputObjectSchema } from './ItemUncheckedCreateWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutActionsInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutActionsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutActionsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutActionsInputObjectSchema = Schema;
