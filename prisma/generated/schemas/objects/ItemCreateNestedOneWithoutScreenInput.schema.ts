import { z } from 'zod';
import { ItemCreateWithoutScreenInputObjectSchema } from './ItemCreateWithoutScreenInput.schema';
import { ItemUncheckedCreateWithoutScreenInputObjectSchema } from './ItemUncheckedCreateWithoutScreenInput.schema';
import { ItemCreateOrConnectWithoutScreenInputObjectSchema } from './ItemCreateOrConnectWithoutScreenInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutScreenInput> = z
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
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutScreenInputObjectSchema = Schema;
