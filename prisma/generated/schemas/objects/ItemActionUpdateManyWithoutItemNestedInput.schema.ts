import { z } from 'zod';
import { ItemActionCreateWithoutItemInputObjectSchema } from './ItemActionCreateWithoutItemInput.schema';
import { ItemActionUncheckedCreateWithoutItemInputObjectSchema } from './ItemActionUncheckedCreateWithoutItemInput.schema';
import { ItemActionCreateOrConnectWithoutItemInputObjectSchema } from './ItemActionCreateOrConnectWithoutItemInput.schema';
import { ItemActionUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './ItemActionUpsertWithWhereUniqueWithoutItemInput.schema';
import { ItemActionCreateManyItemInputEnvelopeObjectSchema } from './ItemActionCreateManyItemInputEnvelope.schema';
import { ItemActionWhereUniqueInputObjectSchema } from './ItemActionWhereUniqueInput.schema';
import { ItemActionUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './ItemActionUpdateWithWhereUniqueWithoutItemInput.schema';
import { ItemActionUpdateManyWithWhereWithoutItemInputObjectSchema } from './ItemActionUpdateManyWithWhereWithoutItemInput.schema';
import { ItemActionScalarWhereInputObjectSchema } from './ItemActionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemActionUpdateManyWithoutItemNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ItemActionUpsertWithWhereUniqueWithoutItemInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemActionUpsertWithWhereUniqueWithoutItemInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemActionCreateManyItemInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema),
        z.lazy(() => ItemActionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ItemActionUpdateWithWhereUniqueWithoutItemInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemActionUpdateWithWhereUniqueWithoutItemInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ItemActionUpdateManyWithWhereWithoutItemInputObjectSchema),
        z
          .lazy(() => ItemActionUpdateManyWithWhereWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ItemActionScalarWhereInputObjectSchema),
        z.lazy(() => ItemActionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemActionUpdateManyWithoutItemNestedInputObjectSchema = Schema;
