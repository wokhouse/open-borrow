import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutScreenNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutScreenNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenUpdateInput> = z
  .object({
    meshCount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    screenNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    itemMeta: z
      .lazy(() => ItemUpdateOneRequiredWithoutScreenNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ScreenUpdateInputObjectSchema = Schema;
