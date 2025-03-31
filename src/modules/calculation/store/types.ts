import type { DeliveryOption, PackageType, Point } from '@src/shared/types';

export interface CalculationDeliveryState {
	isOpenPackageType: boolean;
	selectedPackageType: PackageType | null;
	selectedReiceiverPoint: Point | null;
	selectedSenderPoint: Point | null;
	deliveryOptions: {
		data: DeliveryOption[];
		isLoading: boolean;
		error: string;
	};
	packageTypes: {
		isLoading: boolean;
		error: string;
		data: PackageType[];
	};
}
