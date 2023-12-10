import { z } from 'zod';
import { ActionTypeSchema } from '../enums/ActionType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumActionTypeFilterObjectSchema } from './NestedEnumActionTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumActionTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ActionTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => ActionTypeSchema).array(),
        z.lazy(() => ActionTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ActionTypeSchema).array(),
        z.lazy(() => ActionTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ActionTypeSchema),
        z.lazy(() => NestedEnumActionTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumActionTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumActionTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumActionTypeWithAggregatesFilterObjectSchema = Schema;
