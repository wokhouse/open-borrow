import { z } from 'zod';
import { ItemActionUpdateManyMutationInputObjectSchema } from './objects/ItemActionUpdateManyMutationInput.schema';
import { ItemActionWhereInputObjectSchema } from './objects/ItemActionWhereInput.schema';

export const ItemActionUpdateManySchema = z.object({
  data: ItemActionUpdateManyMutationInputObjectSchema,
  where: ItemActionWhereInputObjectSchema.optional(),
});
