import { FreeDelivery } from '@src/shared/components';
import { capitalizeFirstLetter, declensionWorkingDays } from '@src/shared/helpers';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';

import { dispatchMethodIconsMap } from '../../constants/dispatchMethodIconsMap';
import { getDeliveryMethodsSelector } from '../../store';

import styles from './styles.module.scss';

export const DispatchMethods = () => {
	const { data } = useSelector(getDeliveryMethodsSelector);

	return (
		<>
			<ul className={styles.list}>
				{data.map((method) => (
					<li key={method.id}>
						<button className={styles.method}>
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
		</>
	);
};
