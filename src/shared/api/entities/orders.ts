import type { OrderWithStatus } from '@src/shared/types';

import { api } from '../instance';

export interface GetOrdersResponse extends DefaultResponse {
	orders: OrderWithStatus[];
}

export const getOrders = async ({ config }: AxiosRequestConfig) =>
	api.get<GetOrdersResponse>('/delivery/orders', config);
