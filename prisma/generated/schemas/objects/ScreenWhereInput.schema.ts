import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ScreenWhereInputObjectSchema),
        z.lazy(() => ScreenWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ScreenWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ScreenWhereInputObjectSchema),
        z.lazy(() => ScreenWhereInputObjectSchema).array(),
      ])
      .optional(),
    itemId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    meshCount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    screenNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    itemMeta: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ScreenWhereInputObjectSchema = Schema;
