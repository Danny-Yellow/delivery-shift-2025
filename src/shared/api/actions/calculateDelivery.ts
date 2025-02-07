import type { DeliveryInfo, DeliveryOption } from '@src/shared/types';

import { api } from '../instance';

export interface CalculateDeliveryResponse extends DefaultResponse {
	options: DeliveryOption[];
}

export const calculateDelivery = async ({ data, config }: AxiosRequestConfig<DeliveryInfo>) =>
	api.post<CalculateDeliveryResponse>('/delivery/calc', data, config);
