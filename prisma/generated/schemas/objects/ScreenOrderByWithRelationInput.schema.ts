import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenOrderByWithRelationInput> = z
  .object({
    itemId: z.lazy(() => SortOrderSchema).optional(),
    meshCount: z.lazy(() => SortOrderSchema).optional(),
    screenNumber: z.lazy(() => SortOrderSchema).optional(),
    itemMeta: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ScreenOrderByWithRelationInputObjectSchema = Schema;
