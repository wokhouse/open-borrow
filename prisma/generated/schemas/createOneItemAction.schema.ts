import { z } from 'zod';
import { ItemActionCreateInputObjectSchema } from './objects/ItemActionCreateInput.schema';
import { ItemActionUncheckedCreateInputObjectSchema } from './objects/ItemActionUncheckedCreateInput.schema';

export const ItemActionCreateOneSchema = z.object({
  data: z.union([
    ItemActionCreateInputObjectSchema,
    ItemActionUncheckedCreateInputObjectSchema,
  ]),
});
