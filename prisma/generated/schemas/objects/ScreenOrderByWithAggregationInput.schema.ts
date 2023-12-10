import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScreenCountOrderByAggregateInputObjectSchema } from './ScreenCountOrderByAggregateInput.schema';
import { ScreenAvgOrderByAggregateInputObjectSchema } from './ScreenAvgOrderByAggregateInput.schema';
import { ScreenMaxOrderByAggregateInputObjectSchema } from './ScreenMaxOrderByAggregateInput.schema';
import { ScreenMinOrderByAggregateInputObjectSchema } from './ScreenMinOrderByAggregateInput.schema';
import { ScreenSumOrderByAggregateInputObjectSchema } from './ScreenSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenOrderByWithAggregationInput> = z
  .object({
    itemId: z.lazy(() => SortOrderSchema).optional(),
    meshCount: z.lazy(() => SortOrderSchema).optional(),
    screenNumber: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ScreenCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ScreenAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ScreenMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ScreenMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ScreenSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ScreenOrderByWithAggregationInputObjectSchema = Schema;
