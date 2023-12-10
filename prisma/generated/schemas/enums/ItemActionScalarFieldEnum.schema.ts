import { z } from 'zod';

export const ItemActionScalarFieldEnumSchema = z.enum([
  'id',
  'timestamp',
  'action',
  'name',
  'dueDate',
  'itemId',
]);
