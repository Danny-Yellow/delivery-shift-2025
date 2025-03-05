import type { OrderWithStatus } from '@src/shared/types';

export interface OrderHistoryState {
	data: OrderWithStatus[] | null;
	error: string;
	isLoading: boolean;
}
