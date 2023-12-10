import { z } from 'zod';
import { ScreenWhereInputObjectSchema } from './objects/ScreenWhereInput.schema';
import { ScreenOrderByWithAggregationInputObjectSchema } from './objects/ScreenOrderByWithAggregationInput.schema';
import { ScreenScalarWhereWithAggregatesInputObjectSchema } from './objects/ScreenScalarWhereWithAggregatesInput.schema';
import { ScreenScalarFieldEnumSchema } from './enums/ScreenScalarFieldEnum.schema';

export const ScreenGroupBySchema = z.object({
  where: ScreenWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ScreenOrderByWithAggregationInputObjectSchema,
      ScreenOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ScreenScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ScreenScalarFieldEnumSchema),
});
