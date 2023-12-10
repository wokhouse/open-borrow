import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemActionOrderByRelationAggregateInputObjectSchema } from './ItemActionOrderByRelationAggregateInput.schema';
import { ScreenOrderByWithRelationInputObjectSchema } from './ScreenOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemOrderByWithRelationInput> = z
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
    actions: z
      .lazy(() => ItemActionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    screen: z.lazy(() => ScreenOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ItemOrderByWithRelationInputObjectSchema = Schema;
