import type { OrderWithStatus } from '@src/shared/types';

export interface OrderState {
	orderDetails: {
		data: OrderWithStatus | null;
		error: string;
		isLoading: boolean;
	};
	orderHistory: {
		data: OrderWithStatus[] | null;
		error: string;
		isLoading: boolean;
	};
	orderRequest: {
		data: OrderWithStatus | null;
		error: string;
		isLoading: boolean;
	};
}
