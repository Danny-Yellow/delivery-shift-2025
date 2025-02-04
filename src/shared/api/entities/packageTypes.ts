import type { PackageTypes } from '@src/shared/types';

import { api } from '../instance';

export interface GetPackageTypesResponse extends DefaultResponse {
	packages: PackageTypes;
}

export const getPackageTypes = async ({ config }: AxiosRequestConfig) =>
	api.get<GetPackageTypesResponse>('/delivery/package/types', config);
