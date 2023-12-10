import { z } from 'zod';
import { ScreenCreateWithoutItemMetaInputObjectSchema } from './ScreenCreateWithoutItemMetaInput.schema';
import { ScreenUncheckedCreateWithoutItemMetaInputObjectSchema } from './ScreenUncheckedCreateWithoutItemMetaInput.schema';
import { ScreenCreateOrConnectWithoutItemMetaInputObjectSchema } from './ScreenCreateOrConnectWithoutItemMetaInput.schema';
import { ScreenWhereUniqueInputObjectSchema } from './ScreenWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenUncheckedCreateNestedOneWithoutItemMetaInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ScreenCreateWithoutItemMetaInputObjectSchema),
          z.lazy(() => ScreenUncheckedCreateWithoutItemMetaInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ScreenCreateOrConnectWithoutItemMetaInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ScreenWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ScreenUncheckedCreateNestedOneWithoutItemMetaInputObjectSchema =
  Schema;
