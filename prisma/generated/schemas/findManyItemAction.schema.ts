import { z } from 'zod';
import { ItemActionOrderByWithRelationInputObjectSchema } from './objects/ItemActionOrderByWithRelationInput.schema';
import { ItemActionWhereInputObjectSchema } from './objects/ItemActionWhereInput.schema';
import { ItemActionWhereUniqueInputObjectSchema } from './objects/ItemActionWhereUniqueInput.schema';
import { ItemActionScalarFieldEnumSchema } from './enums/ItemActionScalarFieldEnum.schema';

export const ItemActionFindManySchema = z.object({
  orderBy: z
    .union([
      ItemActionOrderByWithRelationInputObjectSchema,
      ItemActionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ItemActionWhereInputObjectSchema.optional(),
  cursor: ItemActionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ItemActionScalarFieldEnumSchema).optional(),
});
