import type { OrderWithOption, OrderWithStatus } from '@src/shared/types';

import { api } from '../instance';

export interface CreateDeliveryOrderResponse extends DefaultResponse {
	order: OrderWithStatus;
}

export const createDeliveryOrder = ({ data, config }: AxiosRequestConfig<OrderWithOption>) =>
	api.post<CreateDeliveryOrderResponse>('/delivery/order', data, config);
