import { z } from 'zod';
import { ItemStateSchema } from '../enums/ItemState.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumItemStateFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ItemStateSchema).optional(),
  })
  .strict();

export const EnumItemStateFieldUpdateOperationsInputObjectSchema = Schema;
