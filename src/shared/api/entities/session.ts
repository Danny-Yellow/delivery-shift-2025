import type { User } from '@src/shared/types';

import { api } from '../instance';

export interface GetSessionResponse extends DefaultResponse {
	user: User;
}

export const getSession = ({ config }: AxiosRequestConfig) =>
	api.get<GetSessionResponse>('/users/session', config);
