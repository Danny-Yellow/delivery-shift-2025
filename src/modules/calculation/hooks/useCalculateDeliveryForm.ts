
import { useDispatch } from '@src/store';

import {
	changeSelectedPackageType,
	changeSelectedReiceiverPoint,
	changeSelectedSenderPoint,
} from '../store';

export const useCalculateDeliveryForm = () => {
	const dispatch = useDispatch();

	function handleSenderPointSelect(pointId: string) {
		dispatch(changeSelectedSenderPoint({ pointId }));
	}

	function handleReiceiverPointSelect(pointId: string) {
		dispatch(changeSelectedReiceiverPoint({ pointId }));
	}

	function handlePackageTypeSelect(packageTypeId: string) {
		dispatch(changeSelectedPackageType({ packageTypeId }));
	}

	return { handleSenderPointSelect, handleReiceiverPointSelect, handlePackageTypeSelect };
};
