import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenUncheckedCreateWithoutItemMetaInput> = z
  .object({
    meshCount: z.number(),
    screenNumber: z.number(),
  })
  .strict();

export const ScreenUncheckedCreateWithoutItemMetaInputObjectSchema = Schema;
