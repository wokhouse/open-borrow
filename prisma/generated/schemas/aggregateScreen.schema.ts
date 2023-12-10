import { z } from 'zod';
import { ScreenOrderByWithRelationInputObjectSchema } from './objects/ScreenOrderByWithRelationInput.schema';
import { ScreenWhereInputObjectSchema } from './objects/ScreenWhereInput.schema';
import { ScreenWhereUniqueInputObjectSchema } from './objects/ScreenWhereUniqueInput.schema';
import { ScreenCountAggregateInputObjectSchema } from './objects/ScreenCountAggregateInput.schema';
import { ScreenMinAggregateInputObjectSchema } from './objects/ScreenMinAggregateInput.schema';
import { ScreenMaxAggregateInputObjectSchema } from './objects/ScreenMaxAggregateInput.schema';
import { ScreenAvgAggregateInputObjectSchema } from './objects/ScreenAvgAggregateInput.schema';
import { ScreenSumAggregateInputObjectSchema } from './objects/ScreenSumAggregateInput.schema';

export const ScreenAggregateSchema = z.object({
  orderBy: z
    .union([
      ScreenOrderByWithRelationInputObjectSchema,
      ScreenOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ScreenWhereInputObjectSchema.optional(),
  cursor: ScreenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ScreenCountAggregateInputObjectSchema])
    .optional(),
  _min: ScreenMinAggregateInputObjectSchema.optional(),
  _max: ScreenMaxAggregateInputObjectSchema.optional(),
  _avg: ScreenAvgAggregateInputObjectSchema.optional(),
  _sum: ScreenSumAggregateInputObjectSchema.optional(),
});
