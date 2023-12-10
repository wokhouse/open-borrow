import { z } from 'zod';
import { ItemActionWhereInputObjectSchema } from './objects/ItemActionWhereInput.schema';

export const ItemActionDeleteManySchema = z.object({
  where: ItemActionWhereInputObjectSchema.optional(),
});
