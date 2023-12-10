import { z } from 'zod';
import { ScreenUpdateWithoutItemMetaInputObjectSchema } from './ScreenUpdateWithoutItemMetaInput.schema';
import { ScreenUncheckedUpdateWithoutItemMetaInputObjectSchema } from './ScreenUncheckedUpdateWithoutItemMetaInput.schema';
import { ScreenCreateWithoutItemMetaInputObjectSchema } from './ScreenCreateWithoutItemMetaInput.schema';
import { ScreenUncheckedCreateWithoutItemMetaInputObjectSchema } from './ScreenUncheckedCreateWithoutItemMetaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenUpsertWithoutItemMetaInput> = z
  .object({
    update: z.union([
      z.lazy(() => ScreenUpdateWithoutItemMetaInputObjectSchema),
      z.lazy(() => ScreenUncheckedUpdateWithoutItemMetaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ScreenCreateWithoutItemMetaInputObjectSchema),
      z.lazy(() => ScreenUncheckedCreateWithoutItemMetaInputObjectSchema),
    ]),
  })
  .strict();

export const ScreenUpsertWithoutItemMetaInputObjectSchema = Schema;
