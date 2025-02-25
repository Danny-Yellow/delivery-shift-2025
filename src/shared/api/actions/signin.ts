import type { Signin, User } from '@src/shared/types';

import { api } from '../instance';

export interface SigninResponse extends DefaultResponse {
	user: User;
}

export const signin = ({ data, config }: AxiosRequestConfig<Signin>) =>
	api.post<SigninResponse>('/users/signin', data, config);
