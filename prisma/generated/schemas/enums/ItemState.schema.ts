import { z } from 'zod';

export const ItemStateSchema = z.enum([
  'AVAILABLE',
  'CHECKED_OUT',
  'DUE',
  'DAMAGED',
]);
