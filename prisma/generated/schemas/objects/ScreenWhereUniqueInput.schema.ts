import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenWhereUniqueInput> = z
  .object({
    itemId: z.string().optional(),
  })
  .strict();

export const ScreenWhereUniqueInputObjectSchema = Schema;
