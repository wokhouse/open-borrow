import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenMinOrderByAggregateInput> = z
  .object({
    itemId: z.lazy(() => SortOrderSchema).optional(),
    meshCount: z.lazy(() => SortOrderSchema).optional(),
    screenNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ScreenMinOrderByAggregateInputObjectSchema = Schema;
