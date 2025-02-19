import { ROUTES } from '@src/shared/constants';
import { useDispatch, useSelector } from '@src/store';
import { useNavigate } from 'react-router';

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

	const navigate = useNavigate();

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

	async function handleCalculateDeliverySubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const resultAction = await dispatch(
			calculateDeliveryThunk({
				package: selectedPackageType,
				receiverPoint: selectedPoints.receiverPoint,
				senderPoint: selectedPoints.senderPoint,
			}),
		);

		if (calculateDeliveryThunk.fulfilled.match(resultAction)) {
			navigate(ROUTES.PROCESSING);
		}
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
