import { z } from 'zod';
import { ActionTypeSchema } from '../enums/ActionType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    timestamp: z.coerce.date().optional(),
    action: z.lazy(() => ActionTypeSchema),
    name: z.string(),
    dueDate: z.coerce.date().optional().nullable(),
    itemId: z.string().optional().nullable(),
  })
  .strict();

export const ItemActionUncheckedCreateInputObjectSchema = Schema;
