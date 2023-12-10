import { z } from 'zod';
import { ItemActionWhereUniqueInputObjectSchema } from './ItemActionWhereUniqueInput.schema';
import { ItemActionCreateWithoutItemInputObjectSchema } from './ItemActionCreateWithoutItemInput.schema';
import { ItemActionUncheckedCreateWithoutItemInputObjectSchema } from './ItemActionUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemActionCreateWithoutItemInputObjectSchema),
      z.lazy(() => ItemActionUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const ItemActionCreateOrConnectWithoutItemInputObjectSchema = Schema;
