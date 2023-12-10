import { z } from 'zod';
import { ItemStateSchema } from '../enums/ItemState.schema';
import { NestedEnumItemStateFilterObjectSchema } from './NestedEnumItemStateFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumItemStateFilter> = z
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
        z.lazy(() => NestedEnumItemStateFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumItemStateFilterObjectSchema = Schema;
