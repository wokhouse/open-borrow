import { z } from 'zod';
import { ScreenCreateWithoutItemMetaInputObjectSchema } from './ScreenCreateWithoutItemMetaInput.schema';
import { ScreenUncheckedCreateWithoutItemMetaInputObjectSchema } from './ScreenUncheckedCreateWithoutItemMetaInput.schema';
import { ScreenCreateOrConnectWithoutItemMetaInputObjectSchema } from './ScreenCreateOrConnectWithoutItemMetaInput.schema';
import { ScreenUpsertWithoutItemMetaInputObjectSchema } from './ScreenUpsertWithoutItemMetaInput.schema';
import { ScreenWhereUniqueInputObjectSchema } from './ScreenWhereUniqueInput.schema';
import { ScreenUpdateWithoutItemMetaInputObjectSchema } from './ScreenUpdateWithoutItemMetaInput.schema';
import { ScreenUncheckedUpdateWithoutItemMetaInputObjectSchema } from './ScreenUncheckedUpdateWithoutItemMetaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScreenUncheckedUpdateOneWithoutItemMetaNestedInput> =
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
      upsert: z
        .lazy(() => ScreenUpsertWithoutItemMetaInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => ScreenWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ScreenUpdateWithoutItemMetaInputObjectSchema),
          z.lazy(() => ScreenUncheckedUpdateWithoutItemMetaInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ScreenUncheckedUpdateOneWithoutItemMetaNestedInputObjectSchema =
  Schema;
