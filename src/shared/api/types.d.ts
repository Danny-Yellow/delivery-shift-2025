type AxiosRequestConfig<Params = undefined> = Params extends undefined
	? { config?: import('axios').AxiosRequestConfig }
	: { data: Params; config?: import('axios').AxiosRequestConfig };

interface DefaultResponse {
	reason: string;
	success: boolean;
}
