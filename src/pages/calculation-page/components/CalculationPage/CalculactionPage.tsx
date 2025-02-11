import { CalculateDeliveryForm, getPointsThunk } from '@src/modules/calculation';
import { useDispatch } from '@src/store';
import { useEffect } from 'react';

import { DeliveryPromo } from '../DeliveryPromo/DeliveryPromo';

import styles from './styles.module.scss';

export const CalculationPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPointsThunk());
	}, []);

	return (
		<div className={styles.page}>
			<DeliveryPromo />
			<CalculateDeliveryForm />
		</div>
	);
};
