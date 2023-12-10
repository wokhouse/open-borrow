import { z } from 'zod';

export const ActionTypeSchema = z.enum(['CHECK_OUT', 'RETURN', 'DAMAGED']);
