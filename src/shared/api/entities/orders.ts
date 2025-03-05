import type { OrderWithStatus } from '@src/shared/types';

import { api } from '../instance';

export interface getOrdersResponse extends DefaultResponse {
	orders: OrderWithStatus[];
}

export const getOrders = async ({ config }: AxiosRequestConfig) =>
	api.get<getOrdersResponse>('/delivery/orders', config);
