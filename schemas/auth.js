import * as zod from 'zod';

export const PhoneSchema = zod.object({
	country: zod.string(),
	phone: zod.string(),
});
