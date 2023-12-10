import { z } from 'zod';
import { ScreenWhereUniqueInputObjectSchema } from './ScreenWhereUniqueInput.schema';
import { ScreenCreateWithoutItemMetaInputObjectSchema } from './ScreenCreateWithoutItemMetaInput.schema';
import { ScreenUncheckedCreateWithoutItemMetaInputObjectSchema } from './ScreenUncheckedCreateWithoutItemMetaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenCreateOrConnectWithoutItemMetaInput> = z
  .object({
    where: z.lazy(() => ScreenWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ScreenCreateWithoutItemMetaInputObjectSchema),
      z.lazy(() => ScreenUncheckedCreateWithoutItemMetaInputObjectSchema),
    ]),
  })
  .strict();

export const ScreenCreateOrConnectWithoutItemMetaInputObjectSchema = Schema;
