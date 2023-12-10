import { z } from 'zod';
import { ScreenWhereInputObjectSchema } from './objects/ScreenWhereInput.schema';

export const ScreenDeleteManySchema = z.object({
  where: ScreenWhereInputObjectSchema.optional(),
});
