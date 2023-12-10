import { z } from 'zod';
import { ScreenCreateInputObjectSchema } from './objects/ScreenCreateInput.schema';
import { ScreenUncheckedCreateInputObjectSchema } from './objects/ScreenUncheckedCreateInput.schema';

export const ScreenCreateOneSchema = z.object({
  data: z.union([
    ScreenCreateInputObjectSchema,
    ScreenUncheckedCreateInputObjectSchema,
  ]),
});
