import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

export const Calculation = () => {
	return (
		<div className={styles.card}>
			<Typography variant="h2">Рассчитать доставку</Typography>
		</div>
	);
};
