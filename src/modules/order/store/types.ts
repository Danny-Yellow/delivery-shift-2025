import type { OrderWithStatus } from '@src/shared/types';

export interface OrderState {
	cancelOrder: {
		error: string;
		isLoading: boolean;
		isSuccess: boolean | null;
	};
	cancelOrderModal: {
		isOpen: boolean;
	};
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
