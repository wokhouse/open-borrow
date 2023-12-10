import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenCreateManyInput> = z
  .object({
    itemId: z.string(),
    meshCount: z.number(),
    screenNumber: z.number(),
  })
  .strict();

export const ScreenCreateManyInputObjectSchema = Schema;
