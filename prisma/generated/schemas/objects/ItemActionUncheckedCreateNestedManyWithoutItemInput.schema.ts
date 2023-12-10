import { z } from 'zod';
import { ItemActionCreateWithoutItemInputObjectSchema } from './ItemActionCreateWithoutItemInput.schema';
import { ItemActionUncheckedCreateWithoutItemInputObjectSchema } from './ItemActionUncheckedCreateWithoutItemInput.schema';
import { ItemActionCreateOrConnectWithoutItemInputObjectSchema } from './ItemActionCreateOrConnectWithoutItemInput.schema';
import { ItemActionCreateManyItemInputEnvelopeObjectSchema } from './ItemActionCreateManyItemInputEnvelope.schema';
import { ItemActionWhereUniqueInputObjectSchema } from './ItemActionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUncheckedCreateNestedManyWithoutItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemActionCreateWithoutItemInputObjectSchema),
          z.lazy(() => ItemActionCreateWithoutItemInputObjectSchema).array(),
          z.lazy(() => ItemActionUncheckedCreateWithoutItemInputObjectSchema),
          z
            .lazy(() => ItemActionUncheckedCreateWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemActionCreateOrConnectWithoutItemInputObjectSchema),
          z
            .lazy(() => ItemActionCreateOrConnectWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemActionCreateManyItemInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
          z.lazy(() => ItemActionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemActionUncheckedCreateNestedManyWithoutItemInputObjectSchema =
  Schema;
