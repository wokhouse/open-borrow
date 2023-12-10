import { z } from 'zod';

export const ItemScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'state',
  'department',
  'type',
]);
