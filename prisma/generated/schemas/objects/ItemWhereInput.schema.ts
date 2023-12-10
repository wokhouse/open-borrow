import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumItemStateFilterObjectSchema } from './EnumItemStateFilter.schema';
import { ItemStateSchema } from '../enums/ItemState.schema';
import { EnumDepartmentFilterObjectSchema } from './EnumDepartmentFilter.schema';
import { DepartmentSchema } from '../enums/Department.schema';
import { EnumItemTypeFilterObjectSchema } from './EnumItemTypeFilter.schema';
import { ItemTypeSchema } from '../enums/ItemType.schema';
import { ItemActionListRelationFilterObjectSchema } from './ItemActionListRelationFilter.schema';
import { ScreenRelationFilterObjectSchema } from './ScreenRelationFilter.schema';
import { ScreenWhereInputObjectSchema } from './ScreenWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    state: z
      .union([
        z.lazy(() => EnumItemStateFilterObjectSchema),
        z.lazy(() => ItemStateSchema),
      ])
      .optional(),
    department: z
      .union([
        z.lazy(() => EnumDepartmentFilterObjectSchema),
        z.lazy(() => DepartmentSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumItemTypeFilterObjectSchema),
        z.lazy(() => ItemTypeSchema),
      ])
      .optional(),
    actions: z.lazy(() => ItemActionListRelationFilterObjectSchema).optional(),
    screen: z
      .union([
        z.lazy(() => ScreenRelationFilterObjectSchema),
        z.lazy(() => ScreenWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const ItemWhereInputObjectSchema = Schema;
