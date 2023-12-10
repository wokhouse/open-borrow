import { z } from 'zod';
import { ItemTypeSchema } from '../enums/ItemType.schema';
import { NestedEnumItemTypeWithAggregatesFilterObjectSchema } from './NestedEnumItemTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumItemTypeFilterObjectSchema } from './NestedEnumItemTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumItemTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ItemTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => ItemTypeSchema).array(),
        z.lazy(() => ItemTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ItemTypeSchema).array(),
        z.lazy(() => ItemTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ItemTypeSchema),
        z.lazy(() => NestedEnumItemTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumItemTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumItemTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumItemTypeWithAggregatesFilterObjectSchema = Schema;
