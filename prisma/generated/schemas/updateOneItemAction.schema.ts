import { z } from 'zod';
import { ItemActionUpdateInputObjectSchema } from './objects/ItemActionUpdateInput.schema';
import { ItemActionUncheckedUpdateInputObjectSchema } from './objects/ItemActionUncheckedUpdateInput.schema';
import { ItemActionWhereUniqueInputObjectSchema } from './objects/ItemActionWhereUniqueInput.schema';

export const ItemActionUpdateOneSchema = z.object({
  data: z.union([
    ItemActionUpdateInputObjectSchema,
    ItemActionUncheckedUpdateInputObjectSchema,
  ]),
  where: ItemActionWhereUniqueInputObjectSchema,
});
