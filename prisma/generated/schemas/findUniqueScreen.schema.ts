import { z } from 'zod';
import { ScreenWhereUniqueInputObjectSchema } from './objects/ScreenWhereUniqueInput.schema';

export const ScreenFindUniqueSchema = z.object({
  where: ScreenWhereUniqueInputObjectSchema,
});
