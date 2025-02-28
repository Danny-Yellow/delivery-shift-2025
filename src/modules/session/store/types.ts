export interface SessionState {
	isAuth: boolean;
	session: {
		isLoading: boolean;
		error: string;
	};
	signin: {
		isLoading: boolean;
		error: string;
	};
	user: {
		phone: string;
		firstname: string;
		middlename: string;
		lastname: string;
		email: string;
		city: string;
	};
}
