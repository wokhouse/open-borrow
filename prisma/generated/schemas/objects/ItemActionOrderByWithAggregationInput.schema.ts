import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemActionCountOrderByAggregateInputObjectSchema } from './ItemActionCountOrderByAggregateInput.schema';
import { ItemActionAvgOrderByAggregateInputObjectSchema } from './ItemActionAvgOrderByAggregateInput.schema';
import { ItemActionMaxOrderByAggregateInputObjectSchema } from './ItemActionMaxOrderByAggregateInput.schema';
import { ItemActionMinOrderByAggregateInputObjectSchema } from './ItemActionMinOrderByAggregateInput.schema';
import { ItemActionSumOrderByAggregateInputObjectSchema } from './ItemActionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    dueDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    itemId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ItemActionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ItemActionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ItemActionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ItemActionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ItemActionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemActionOrderByWithAggregationInputObjectSchema = Schema;
