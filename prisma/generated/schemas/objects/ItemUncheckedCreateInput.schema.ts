import { z } from 'zod';
import { ItemStateSchema } from '../enums/ItemState.schema';
import { DepartmentSchema } from '../enums/Department.schema';
import { ItemTypeSchema } from '../enums/ItemType.schema';
import { ScreenUncheckedCreateNestedOneWithoutItemMetaInputObjectSchema } from './ScreenUncheckedCreateNestedOneWithoutItemMetaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    state: z.lazy(() => ItemStateSchema),
    department: z.lazy(() => DepartmentSchema),
    type: z.lazy(() => ItemTypeSchema),
    screen: z
      .lazy(
        () => ScreenUncheckedCreateNestedOneWithoutItemMetaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ItemUncheckedCreateInputObjectSchema = Schema;
