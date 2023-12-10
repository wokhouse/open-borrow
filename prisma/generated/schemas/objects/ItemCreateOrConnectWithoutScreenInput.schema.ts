import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutScreenInputObjectSchema } from './ItemCreateWithoutScreenInput.schema';
import { ItemUncheckedCreateWithoutScreenInputObjectSchema } from './ItemUncheckedCreateWithoutScreenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutScreenInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutScreenInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutScreenInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutScreenInputObjectSchema = Schema;
