import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenCreateWithoutItemMetaInput> = z
  .object({
    meshCount: z.number(),
    screenNumber: z.number(),
  })
  .strict();

export const ScreenCreateWithoutItemMetaInputObjectSchema = Schema;
