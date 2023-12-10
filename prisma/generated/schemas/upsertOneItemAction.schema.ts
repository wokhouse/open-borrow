import { z } from 'zod';
import { ItemActionWhereUniqueInputObjectSchema } from './objects/ItemActionWhereUniqueInput.schema';
import { ItemActionCreateInputObjectSchema } from './objects/ItemActionCreateInput.schema';
import { ItemActionUncheckedCreateInputObjectSchema } from './objects/ItemActionUncheckedCreateInput.schema';
import { ItemActionUpdateInputObjectSchema } from './objects/ItemActionUpdateInput.schema';
import { ItemActionUncheckedUpdateInputObjectSchema } from './objects/ItemActionUncheckedUpdateInput.schema';

export const ItemActionUpsertSchema = z.object({
  where: ItemActionWhereUniqueInputObjectSchema,
  create: z.union([
    ItemActionCreateInputObjectSchema,
    ItemActionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ItemActionUpdateInputObjectSchema,
    ItemActionUncheckedUpdateInputObjectSchema,
  ]),
});
