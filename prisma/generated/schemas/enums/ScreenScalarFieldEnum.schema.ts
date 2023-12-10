import { z } from 'zod';

export const ScreenScalarFieldEnumSchema = z.enum([
  'itemId',
  'meshCount',
  'screenNumber',
]);
