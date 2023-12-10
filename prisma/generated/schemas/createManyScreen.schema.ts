import { z } from 'zod';
import { ScreenCreateManyInputObjectSchema } from './objects/ScreenCreateManyInput.schema';

export const ScreenCreateManySchema = z.object({
  data: z.union([
    ScreenCreateManyInputObjectSchema,
    z.array(ScreenCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
