import type { OrderWithStatus } from '@src/shared/types';

export interface OrderState {
	order: {
		isLoading: boolean;
		error: string;
		data: OrderWithStatus | null;
	};
}
