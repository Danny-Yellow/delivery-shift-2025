import type { PackageType } from '@src/shared/types';

import { api } from '../instance';

export interface GetPackageTypesResponse extends DefaultResponse {
	packages: PackageType[];
}

export const getPackageTypes = async ({ config }: AxiosRequestConfig) =>
	api.get<GetPackageTypesResponse>('/delivery/package/types', config);
