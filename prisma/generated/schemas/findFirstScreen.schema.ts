import { z } from 'zod';
import { ScreenOrderByWithRelationInputObjectSchema } from './objects/ScreenOrderByWithRelationInput.schema';
import { ScreenWhereInputObjectSchema } from './objects/ScreenWhereInput.schema';
import { ScreenWhereUniqueInputObjectSchema } from './objects/ScreenWhereUniqueInput.schema';
import { ScreenScalarFieldEnumSchema } from './enums/ScreenScalarFieldEnum.schema';

export const ScreenFindFirstSchema = z.object({
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
  distinct: z.array(ScreenScalarFieldEnumSchema).optional(),
});
