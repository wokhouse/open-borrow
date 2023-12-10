import { z } from 'zod';
import { ItemActionWhereUniqueInputObjectSchema } from './ItemActionWhereUniqueInput.schema';
import { ItemActionUpdateWithoutItemInputObjectSchema } from './ItemActionUpdateWithoutItemInput.schema';
import { ItemActionUncheckedUpdateWithoutItemInputObjectSchema } from './ItemActionUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUpdateWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemActionUpdateWithoutItemInputObjectSchema),
        z.lazy(() => ItemActionUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const ItemActionUpdateWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
