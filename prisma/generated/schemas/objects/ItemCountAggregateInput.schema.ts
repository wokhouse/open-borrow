import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    state: z.literal(true).optional(),
    department: z.literal(true).optional(),
    type: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ItemCountAggregateInputObjectSchema = Schema;
