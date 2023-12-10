import { z } from 'zod';
import { ScreenWhereUniqueInputObjectSchema } from './objects/ScreenWhereUniqueInput.schema';
import { ScreenCreateInputObjectSchema } from './objects/ScreenCreateInput.schema';
import { ScreenUncheckedCreateInputObjectSchema } from './objects/ScreenUncheckedCreateInput.schema';
import { ScreenUpdateInputObjectSchema } from './objects/ScreenUpdateInput.schema';
import { ScreenUncheckedUpdateInputObjectSchema } from './objects/ScreenUncheckedUpdateInput.schema';

export const ScreenUpsertSchema = z.object({
  where: ScreenWhereUniqueInputObjectSchema,
  create: z.union([
    ScreenCreateInputObjectSchema,
    ScreenUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ScreenUpdateInputObjectSchema,
    ScreenUncheckedUpdateInputObjectSchema,
  ]),
});
