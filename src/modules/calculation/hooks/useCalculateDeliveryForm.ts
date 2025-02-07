import { useDispatch, useSelector } from '@src/store';

import {
	calculateDeliveryThunk,
	changeSelectedPackageType,
	changeSelectedReiceiverPoint,
	changeSelectedSenderPoint,
	getIsOpenPackageTypeSelector,
	getSelectedPackageTypeSelector,
	getSelectedPointsSelector,
	setIsOpenPackageTypeSelecting,
} from '../store';

export const useCalculateDeliveryForm = () => {
	const dispatch = useDispatch();

	const selectedPoints = useSelector(getSelectedPointsSelector);
	const selectedPackageType = useSelector(getSelectedPackageTypeSelector);
	const isOpenPackageType = useSelector(getIsOpenPackageTypeSelector);

	function handleSenderPointSelect(pointId: string) {
		dispatch(changeSelectedSenderPoint({ pointId }));
	}

	function handleReiceiverPointSelect(pointId: string) {
		dispatch(changeSelectedReiceiverPoint({ pointId }));
	}

	function handlePackageTypeOpenChange(isOpen: boolean) {
		dispatch(setIsOpenPackageTypeSelecting(isOpen));
	}

	function handlePackageTypeSelect(packageTypeId: string) {
		dispatch(changeSelectedPackageType({ packageTypeId }));
	}

	function handleCalculateDeliverySubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch(
			calculateDeliveryThunk({
				package: selectedPackageType,
				receiverPoint: selectedPoints.reiceiverPoint,
				senderPoint: selectedPoints.senderPoint,
			}),
		);
	}

	return {
		selectedPoints,
		selectedPackageType,
		isOpenPackageType,
		handleSenderPointSelect,
		handleReiceiverPointSelect,
		handlePackageTypeSelect,
		handlePackageTypeOpenChange,
		handleCalculateDeliverySubmit,
	};
};
