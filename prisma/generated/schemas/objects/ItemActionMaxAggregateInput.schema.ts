import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    action: z.literal(true).optional(),
    name: z.literal(true).optional(),
    dueDate: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
  })
  .strict();

export const ItemActionMaxAggregateInputObjectSchema = Schema;
