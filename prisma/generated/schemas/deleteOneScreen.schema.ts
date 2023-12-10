import { z } from 'zod';
import { ScreenWhereUniqueInputObjectSchema } from './objects/ScreenWhereUniqueInput.schema';

export const ScreenDeleteOneSchema = z.object({
  where: ScreenWhereUniqueInputObjectSchema,
});
