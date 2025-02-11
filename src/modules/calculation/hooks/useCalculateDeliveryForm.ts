import { useDispatch } from '@src/store';

import { changeSelectedReiceiverPoint, changeSelectedSenderPoint } from '../store';

export const useCalculateDeliveryForm = () => {
	const dispatch = useDispatch();

	function handleSenderPointSelect(pointId: string) {
		dispatch(changeSelectedSenderPoint({ pointId }));
	}

	function handleReiceiverPointSelect(pointId: string) {
		dispatch(changeSelectedReiceiverPoint({ pointId }));
	}

	return { handleSenderPointSelect, handleReiceiverPointSelect };
};
