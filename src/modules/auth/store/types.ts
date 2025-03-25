export interface AuthState {
	isContinued: boolean;
	phone: string | null;
	retryDelay: {
		isLoading: boolean;
		error: string;
		data: number | null;
	};
}
