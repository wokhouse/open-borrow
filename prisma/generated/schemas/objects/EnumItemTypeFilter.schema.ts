import { z } from 'zod';
import { ItemTypeSchema } from '../enums/ItemType.schema';
import { NestedEnumItemTypeFilterObjectSchema } from './NestedEnumItemTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumItemTypeFilter> = z
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
        z.lazy(() => NestedEnumItemTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumItemTypeFilterObjectSchema = Schema;
