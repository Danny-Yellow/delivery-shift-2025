import type { DeliveryOption } from '@src/shared/types';

import { FreeDelivery } from '@src/shared/components';
import { capitalizeFirstLetter, declensionWorkingDays } from '@src/shared/helpers';
import { Form } from '@src/shared/ui';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { dispatchMethodIconsMap } from '../../constants/dispatchMethodIconsMap';
import { incrementStep, selectDeliveryMethods, setDeliveryMethod } from '../../store';

import styles from './styles.module.scss';

export const DeliveryMethods = () => {
	const dispatch = useDispatch();

	const { data } = useSelector(selectDeliveryMethods);

	function handleMethodClick(method: DeliveryOption) {
		dispatch(setDeliveryMethod(method));
		dispatch(incrementStep());
	}

	return (
		<Form>
			<ul className={styles.list}>
				{data.map((method) => (
					<li key={method.id}>
						<button className={styles.method} onClick={() => handleMethodClick(method)}>
							{dispatchMethodIconsMap[method.type]}
							<div>
								<Typography variant="p_12_regular" color="tertiary">
									{capitalizeFirstLetter(method.name)}
								</Typography>
								<Typography className={styles.price} variant="h3">
									{method.price} ₽
								</Typography>
								<Typography variant="p_12_regular" color="tertiary">
									{method.days} {declensionWorkingDays(method.days)}
								</Typography>
							</div>
						</button>
					</li>
				))}
				<FreeDelivery />
			</ul>
		</Form>
	);
};
