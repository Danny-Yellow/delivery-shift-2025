import {
	CalculateDeliveryForm,
	getPackageTypesThunk,
	selectPackageTypes,
} from '@src/modules/calculation';
import { getPointsThunk, selectPoints } from '@src/modules/points';
import { BottomNavigation } from '@src/shared/components';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';

import { DeliveryPromo } from '../DeliveryPromo/DeliveryPromo';

import styles from './styles.module.scss';

export const CalculationPage = () => {
	const dispatch = useDispatch();

	const packageTypes = useSelector(selectPackageTypes);
	const points = useSelector(selectPoints);

	useEffect(() => {
		dispatch(getPointsThunk());
		dispatch(getPackageTypesThunk());
	}, []);

	useEffect(() => {
		document.documentElement.style.fontSize = 'clamp(11px, 2.5vw, 16px)';

		return () => {
			document.documentElement.style.fontSize = '';
		};
	}, []);

	return (
		<div className={styles.page}>
			<DeliveryPromo />
			<CalculateDeliveryForm
				isLoading={points.isLoading || packageTypes.isLoading}
				points={points.data}
			/>
			<BottomNavigation />
		</div>
	);
};
