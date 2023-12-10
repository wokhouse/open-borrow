import { z } from 'zod';
import { DepartmentSchema } from '../enums/Department.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumDepartmentFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => DepartmentSchema).optional(),
  })
  .strict();

export const EnumDepartmentFieldUpdateOperationsInputObjectSchema = Schema;
