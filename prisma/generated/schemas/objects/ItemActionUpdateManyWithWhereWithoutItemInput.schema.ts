import { z } from 'zod';
import { ItemActionScalarWhereInputObjectSchema } from './ItemActionScalarWhereInput.schema';
import { ItemActionUpdateManyMutationInputObjectSchema } from './ItemActionUpdateManyMutationInput.schema';
import { ItemActionUncheckedUpdateManyWithoutActionsInputObjectSchema } from './ItemActionUncheckedUpdateManyWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUpdateManyWithWhereWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => ItemActionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemActionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ItemActionUncheckedUpdateManyWithoutActionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ItemActionUpdateManyWithWhereWithoutItemInputObjectSchema = Schema;
