import { z } from 'zod';
import { DepartmentSchema } from '../enums/Department.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumDepartmentFilter> = z
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
        z.lazy(() => NestedEnumDepartmentFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumDepartmentFilterObjectSchema = Schema;
