import { api } from '../instance';

export interface CancelOrder {
	orderId: string;
}

export const cancelOrder = ({ data, config }: AxiosRequestConfig<CancelOrder>) =>
	api.put<DefaultResponse>('/delivery/orders/cancel', data, config);
