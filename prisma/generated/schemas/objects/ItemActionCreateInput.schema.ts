import { z } from 'zod';
import { ActionTypeSchema } from '../enums/ActionType.schema';
import { ItemCreateNestedOneWithoutActionsInputObjectSchema } from './ItemCreateNestedOneWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionCreateInput> = z
  .object({
    timestamp: z.coerce.date().optional(),
    action: z.lazy(() => ActionTypeSchema),
    name: z.string(),
    dueDate: z.coerce.date().optional().nullable(),
    Item: z
      .lazy(() => ItemCreateNestedOneWithoutActionsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemActionCreateInputObjectSchema = Schema;
