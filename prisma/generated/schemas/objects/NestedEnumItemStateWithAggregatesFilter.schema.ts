import { z } from 'zod';
import { ItemStateSchema } from '../enums/ItemState.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumItemStateFilterObjectSchema } from './NestedEnumItemStateFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumItemStateWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ItemStateSchema).optional(),
    in: z
      .union([
        z.lazy(() => ItemStateSchema).array(),
        z.lazy(() => ItemStateSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ItemStateSchema).array(),
        z.lazy(() => ItemStateSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ItemStateSchema),
        z.lazy(() => NestedEnumItemStateWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumItemStateFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumItemStateFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumItemStateWithAggregatesFilterObjectSchema = Schema;
