import { z } from 'zod';
import { ScreenWhereInputObjectSchema } from './ScreenWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenRelationFilter> = z
  .object({
    is: z
      .lazy(() => ScreenWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ScreenWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ScreenRelationFilterObjectSchema = Schema;
