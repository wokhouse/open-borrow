import { z } from 'zod';
import { ActionTypeSchema } from '../enums/ActionType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumActionTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ActionTypeSchema).optional(),
  })
  .strict();

export const EnumActionTypeFieldUpdateOperationsInputObjectSchema = Schema;
