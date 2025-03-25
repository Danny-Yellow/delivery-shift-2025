import type { Point } from '@src/shared/types';

import { ROUTES } from '@src/shared/constants';
import { useDispatch, useSelector } from '@src/store';
import { useNavigate } from 'react-router';

import {
	calculateDeliveryThunk,
	changeSelectedPackageType,
	changeSelectedReiceiverPoint,
	changeSelectedSenderPoint,
	selectIsOpenPackageType,
	selectSelectedPackageType,
	selectSelectedPoints,
	setIsOpenPackageTypeSelecting,
} from '../store';

export const useCalculateDeliveryForm = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const selectedPoints = useSelector(selectSelectedPoints);
	const selectedPackageType = useSelector(selectSelectedPackageType);
	const isOpenPackageType = useSelector(selectIsOpenPackageType);

	function handleSenderPointSelect(point: Point) {
		dispatch(changeSelectedSenderPoint({ point }));
	}

	function handleReiceiverPointSelect(point: Point) {
		dispatch(changeSelectedReiceiverPoint({ point }));
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
