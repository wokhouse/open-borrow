import { z } from 'zod';
import { DepartmentSchema } from '../enums/Department.schema';
import { NestedEnumDepartmentWithAggregatesFilterObjectSchema } from './NestedEnumDepartmentWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDepartmentFilterObjectSchema } from './NestedEnumDepartmentFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumDepartmentWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => DepartmentSchema).optional(),
    in: z
      .union([
        z.lazy(() => DepartmentSchema).array(),
        z.lazy(() => DepartmentSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => DepartmentSchema).array(),
        z.lazy(() => DepartmentSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => DepartmentSchema),
        z.lazy(() => NestedEnumDepartmentWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional(),
  })
  .strict();

export const EnumDepartmentWithAggregatesFilterObjectSchema = Schema;
