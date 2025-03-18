import { CalculateDeliveryForm, getPackageTypesThunk } from '@src/modules/calculation';
import { getPointsThunk, selectPoints } from '@src/modules/points';
import { useDispatch } from '@src/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DeliveryPromo } from '../DeliveryPromo/DeliveryPromo';

import styles from './styles.module.scss';

export const CalculationPage = () => {
	const dispatch = useDispatch();

	const { data: points } = useSelector(selectPoints);

	useEffect(() => {
		dispatch(getPointsThunk());
		dispatch(getPackageTypesThunk());
	}, []);

	return (
		<div className={styles.page}>
			<DeliveryPromo />
			<CalculateDeliveryForm points={points} />
		</div>
	);
};
