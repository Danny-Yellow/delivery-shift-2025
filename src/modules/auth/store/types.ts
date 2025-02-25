export interface AuthState {
	phone: string | null;
	code: {
		isLoading: boolean;
		error: string;
		data: number;
	} | null;
}
