import { DispatchMethods } from '@src/modules/delivery-processing';
import { Progress } from '@src/shared/ui';
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

export const DeliveryProcessingPage = () => {
	return (
		<div className={styles.page}>
			<Typography tag="h1" variant="h2">
				Способ отправки
			</Typography>
			<div className={styles.progress}>
				<Typography variant="p_12_regular">
					Шаг {1} из {7}
				</Typography>
				<Progress max={7} value={1} />
			</div>
			<DispatchMethods />
		</div>
	);
};
