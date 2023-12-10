import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenMaxAggregateInputType> = z
  .object({
    itemId: z.literal(true).optional(),
    meshCount: z.literal(true).optional(),
    screenNumber: z.literal(true).optional(),
  })
  .strict();

export const ScreenMaxAggregateInputObjectSchema = Schema;
