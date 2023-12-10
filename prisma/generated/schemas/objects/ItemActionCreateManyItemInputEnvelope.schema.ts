import { z } from 'zod';
import { ItemActionCreateManyItemInputObjectSchema } from './ItemActionCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemActionCreateManyItemInputObjectSchema),
      z.lazy(() => ItemActionCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemActionCreateManyItemInputEnvelopeObjectSchema = Schema;
