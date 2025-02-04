import type { PackageType, Point } from '@src/shared/types';

export interface CalculationDeliveryState {
	selectedPackageType: PackageType | null;
	selectedReiceiverPoint: Point | null;
	selectedSenderPoint: Point | null;
	packageTypes: {
		isLoading: boolean;
		error: string;
		data: PackageType[];
	};
	points: {
		error: string;
		isLoading: boolean;
		data: Point[];
	};
}
