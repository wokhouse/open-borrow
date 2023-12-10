import { z } from 'zod';
import { ItemActionWhereUniqueInputObjectSchema } from './ItemActionWhereUniqueInput.schema';
import { ItemActionUpdateWithoutItemInputObjectSchema } from './ItemActionUpdateWithoutItemInput.schema';
import { ItemActionUncheckedUpdateWithoutItemInputObjectSchema } from './ItemActionUncheckedUpdateWithoutItemInput.schema';
import { ItemActionCreateWithoutItemInputObjectSchema } from './ItemActionCreateWithoutItemInput.schema';
import { ItemActionUncheckedCreateWithoutItemInputObjectSchema } from './ItemActionUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUpsertWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ItemActionUpdateWithoutItemInputObjectSchema),
        z.lazy(() => ItemActionUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemActionCreateWithoutItemInputObjectSchema),
        z.lazy(() => ItemActionUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const ItemActionUpsertWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
