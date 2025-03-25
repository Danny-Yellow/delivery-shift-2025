import { userPipes } from '@src/shared/lib/pipes/user';
import * as v from 'valibot';

export const ProfileFormSchema = v.object(userPipes);
