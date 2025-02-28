import { BASE_URL } from '@src/shared/constants';
import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '../constants/localStorage';

export const api = axios.create({
	baseURL: BASE_URL,
});

api.interceptors.request.use(
	(request) => {
		const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
		if (token) {
			request.headers.Authorization = `Bearer ${token}`;
		}
		return request;
	},
	(error) => Promise.reject(error),
);
