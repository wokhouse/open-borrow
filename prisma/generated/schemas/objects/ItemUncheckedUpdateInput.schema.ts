import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ItemStateSchema } from '../enums/ItemState.schema';
import { EnumItemStateFieldUpdateOperationsInputObjectSchema } from './EnumItemStateFieldUpdateOperationsInput.schema';
import { DepartmentSchema } from '../enums/Department.schema';
import { EnumDepartmentFieldUpdateOperationsInputObjectSchema } from './EnumDepartmentFieldUpdateOperationsInput.schema';
import { ItemTypeSchema } from '../enums/ItemType.schema';
import { EnumItemTypeFieldUpdateOperationsInputObjectSchema } from './EnumItemTypeFieldUpdateOperationsInput.schema';
import { ScreenUncheckedUpdateOneWithoutItemMetaNestedInputObjectSchema } from './ScreenUncheckedUpdateOneWithoutItemMetaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    state: z
      .union([
        z.lazy(() => ItemStateSchema),
        z.lazy(() => EnumItemStateFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    department: z
      .union([
        z.lazy(() => DepartmentSchema),
        z.lazy(() => EnumDepartmentFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => ItemTypeSchema),
        z.lazy(() => EnumItemTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    screen: z
      .lazy(
        () => ScreenUncheckedUpdateOneWithoutItemMetaNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ItemUncheckedUpdateInputObjectSchema = Schema;
