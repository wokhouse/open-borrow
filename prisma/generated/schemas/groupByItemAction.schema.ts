import { z } from 'zod';
import { ItemActionWhereInputObjectSchema } from './objects/ItemActionWhereInput.schema';
import { ItemActionOrderByWithAggregationInputObjectSchema } from './objects/ItemActionOrderByWithAggregationInput.schema';
import { ItemActionScalarWhereWithAggregatesInputObjectSchema } from './objects/ItemActionScalarWhereWithAggregatesInput.schema';
import { ItemActionScalarFieldEnumSchema } from './enums/ItemActionScalarFieldEnum.schema';

export const ItemActionGroupBySchema = z.object({
  where: ItemActionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ItemActionOrderByWithAggregationInputObjectSchema,
      ItemActionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ItemActionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ItemActionScalarFieldEnumSchema),
});
