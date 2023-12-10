import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemCountOrderByAggregateInputObjectSchema } from './ItemCountOrderByAggregateInput.schema';
import { ItemMaxOrderByAggregateInputObjectSchema } from './ItemMaxOrderByAggregateInput.schema';
import { ItemMinOrderByAggregateInputObjectSchema } from './ItemMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    department: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ItemOrderByWithAggregationInputObjectSchema = Schema;
