import type { Point } from '@src/shared/types';

import { api } from '../instance';

export interface GetPointsResponse extends DefaultResponse {
	points: Point[];
}

export const getPoints = ({ config }: AxiosRequestConfig) =>
	api.get<GetPointsResponse>('/delivery/points', config);
