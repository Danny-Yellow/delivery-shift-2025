import { userPipes } from '@src/shared/lib/pipes/user';
import * as v from 'valibot';

const { firstname, lastname, middlename, phone } = userPipes;

export const PersonalFormSchema = v.object({
	firstname,
	lastname,
	middlename,
	phone,
});
