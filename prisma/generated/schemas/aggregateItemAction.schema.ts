import { z } from 'zod';
import { ItemActionOrderByWithRelationInputObjectSchema } from './objects/ItemActionOrderByWithRelationInput.schema';
import { ItemActionWhereInputObjectSchema } from './objects/ItemActionWhereInput.schema';
import { ItemActionWhereUniqueInputObjectSchema } from './objects/ItemActionWhereUniqueInput.schema';
import { ItemActionCountAggregateInputObjectSchema } from './objects/ItemActionCountAggregateInput.schema';
import { ItemActionMinAggregateInputObjectSchema } from './objects/ItemActionMinAggregateInput.schema';
import { ItemActionMaxAggregateInputObjectSchema } from './objects/ItemActionMaxAggregateInput.schema';
import { ItemActionAvgAggregateInputObjectSchema } from './objects/ItemActionAvgAggregateInput.schema';
import { ItemActionSumAggregateInputObjectSchema } from './objects/ItemActionSumAggregateInput.schema';

export const ItemActionAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ItemActionCountAggregateInputObjectSchema])
    .optional(),
  _min: ItemActionMinAggregateInputObjectSchema.optional(),
  _max: ItemActionMaxAggregateInputObjectSchema.optional(),
  _avg: ItemActionAvgAggregateInputObjectSchema.optional(),
  _sum: ItemActionSumAggregateInputObjectSchema.optional(),
});
