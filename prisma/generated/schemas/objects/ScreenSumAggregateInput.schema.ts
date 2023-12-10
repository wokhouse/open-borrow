import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenSumAggregateInputType> = z
  .object({
    meshCount: z.literal(true).optional(),
    screenNumber: z.literal(true).optional(),
  })
  .strict();

export const ScreenSumAggregateInputObjectSchema = Schema;
