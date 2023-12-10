import { z } from 'zod';
import { ItemActionWhereUniqueInputObjectSchema } from './objects/ItemActionWhereUniqueInput.schema';

export const ItemActionDeleteOneSchema = z.object({
  where: ItemActionWhereUniqueInputObjectSchema,
});
