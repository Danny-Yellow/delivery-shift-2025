import { api } from '../instance';

export interface CreateOtpResponse extends DefaultResponse {
	retryDelay: number;
}

export const createOtp = ({ data, config }: AxiosRequestConfig<{ phone: string }>) =>
	api.post<CreateOtpResponse>('/auth/otp', data, config);
