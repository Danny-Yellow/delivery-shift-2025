import { Calculation } from '@src/modules';

import { DeliveryPromo } from '../DeliveryPromo/DeliveryPromo';

import styles from './styles.module.scss';

export const CalculationPage = () => {
	return (
		<div className={styles.page}>
			<DeliveryPromo />
			<Calculation />
		</div>
	);
};
