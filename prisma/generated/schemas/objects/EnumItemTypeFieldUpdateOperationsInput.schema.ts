import { z } from 'zod';
import { ItemTypeSchema } from '../enums/ItemType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumItemTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ItemTypeSchema).optional(),
  })
  .strict();

export const EnumItemTypeFieldUpdateOperationsInputObjectSchema = Schema;
