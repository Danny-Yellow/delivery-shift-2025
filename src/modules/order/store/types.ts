import type { OrderWithStatus } from '@src/shared/types';

export interface OrderState {
	data: OrderWithStatus | null;
	error: string;
	isLoading: boolean;
}
