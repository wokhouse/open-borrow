import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumItemStateWithAggregatesFilterObjectSchema } from './EnumItemStateWithAggregatesFilter.schema';
import { ItemStateSchema } from '../enums/ItemState.schema';
import { EnumDepartmentWithAggregatesFilterObjectSchema } from './EnumDepartmentWithAggregatesFilter.schema';
import { DepartmentSchema } from '../enums/Department.schema';
import { EnumItemTypeWithAggregatesFilterObjectSchema } from './EnumItemTypeWithAggregatesFilter.schema';
import { ItemTypeSchema } from '../enums/ItemType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    state: z
      .union([
        z.lazy(() => EnumItemStateWithAggregatesFilterObjectSchema),
        z.lazy(() => ItemStateSchema),
      ])
      .optional(),
    department: z
      .union([
        z.lazy(() => EnumDepartmentWithAggregatesFilterObjectSchema),
        z.lazy(() => DepartmentSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumItemTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => ItemTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const ItemScalarWhereWithAggregatesInputObjectSchema = Schema;
