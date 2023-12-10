import { z } from 'zod';
import { ScreenUpdateManyMutationInputObjectSchema } from './objects/ScreenUpdateManyMutationInput.schema';
import { ScreenWhereInputObjectSchema } from './objects/ScreenWhereInput.schema';

export const ScreenUpdateManySchema = z.object({
  data: ScreenUpdateManyMutationInputObjectSchema,
  where: ScreenWhereInputObjectSchema.optional(),
});
