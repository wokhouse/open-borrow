import { z } from 'zod';
import { ItemActionWhereUniqueInputObjectSchema } from './objects/ItemActionWhereUniqueInput.schema';

export const ItemActionFindUniqueSchema = z.object({
  where: ItemActionWhereUniqueInputObjectSchema,
});
