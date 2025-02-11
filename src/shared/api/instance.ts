import { BASE_URL } from '@src/shared/constants';
import axios from 'axios';

export const api = axios.create({
	baseURL: BASE_URL,
});
