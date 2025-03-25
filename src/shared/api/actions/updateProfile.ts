import type { Profile, User } from '@src/shared/types';

import { api } from '../instance';

export interface UpdateProfile {
	phone: string;
	profile: Profile;
}

export interface UpdateProfileResponse extends DefaultResponse {
	user: User;
}

export const updateProfile = ({ data, config }: AxiosRequestConfig<UpdateProfile>) =>
	api.patch<UpdateProfileResponse>('/users/profile', data, config);
