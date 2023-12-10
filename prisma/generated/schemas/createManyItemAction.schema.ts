import { z } from 'zod';
import { ItemActionCreateManyInputObjectSchema } from './objects/ItemActionCreateManyInput.schema';

export const ItemActionCreateManySchema = z.object({
  data: z.union([
    ItemActionCreateManyInputObjectSchema,
    z.array(ItemActionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
