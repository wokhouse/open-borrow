import { z } from 'zod';
import { ItemActionWhereInputObjectSchema } from './ItemActionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionListRelationFilter> = z
  .object({
    every: z.lazy(() => ItemActionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ItemActionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ItemActionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ItemActionListRelationFilterObjectSchema = Schema;
