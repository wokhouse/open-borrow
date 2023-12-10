import { z } from 'zod';
import { ActionTypeSchema } from '../enums/ActionType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionCreateWithoutItemInput> = z
  .object({
    timestamp: z.coerce.date().optional(),
    action: z.lazy(() => ActionTypeSchema),
    name: z.string(),
    dueDate: z.coerce.date().optional().nullable(),
  })
  .strict();

export const ItemActionCreateWithoutItemInputObjectSchema = Schema;
