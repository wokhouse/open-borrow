import { z } from 'zod';
import { ScreenUpdateInputObjectSchema } from './objects/ScreenUpdateInput.schema';
import { ScreenUncheckedUpdateInputObjectSchema } from './objects/ScreenUncheckedUpdateInput.schema';
import { ScreenWhereUniqueInputObjectSchema } from './objects/ScreenWhereUniqueInput.schema';

export const ScreenUpdateOneSchema = z.object({
  data: z.union([
    ScreenUpdateInputObjectSchema,
    ScreenUncheckedUpdateInputObjectSchema,
  ]),
  where: ScreenWhereUniqueInputObjectSchema,
});
