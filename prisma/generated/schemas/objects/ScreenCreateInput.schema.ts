import { z } from 'zod';
import { ItemCreateNestedOneWithoutScreenInputObjectSchema } from './ItemCreateNestedOneWithoutScreenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenCreateInput> = z
  .object({
    meshCount: z.number(),
    screenNumber: z.number(),
    itemMeta: z.lazy(() => ItemCreateNestedOneWithoutScreenInputObjectSchema),
  })
  .strict();

export const ScreenCreateInputObjectSchema = Schema;
