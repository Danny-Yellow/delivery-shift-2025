import type { OrderWithStatus } from '@src/shared/types';

import { api } from '../instance';

export interface GetOrderResponse extends DefaultResponse {
	order: OrderWithStatus;
}

export interface GetOrdersResponse extends DefaultResponse {
	orders: OrderWithStatus[];
}

export const getOrders = async ({ config }: AxiosRequestConfig) =>
	api.get<GetOrdersResponse>('/delivery/orders', config);

export const getOrder = async ({ data, config }: AxiosRequestConfig<{ id: string }>) =>
	api.get<GetOrderResponse>(`/delivery/orders/${data.id}`, config);
