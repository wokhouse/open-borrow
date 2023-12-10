import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ActionTypeSchema } from '../enums/ActionType.schema';
import { EnumActionTypeFieldUpdateOperationsInputObjectSchema } from './EnumActionTypeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateOneWithoutActionsNestedInputObjectSchema } from './ItemUpdateOneWithoutActionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUpdateInput> = z
  .object({
    timestamp: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    action: z
      .union([
        z.lazy(() => ActionTypeSchema),
        z.lazy(() => EnumActionTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dueDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Item: z
      .lazy(() => ItemUpdateOneWithoutActionsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemActionUpdateInputObjectSchema = Schema;
