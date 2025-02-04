import { Input } from '@src/shared/ui/Input/Input';
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

export const ExactPackageSizeForm = () => {
	return (
		<div className={styles.form}>
			<label className={styles.label}>
				<Typography variant="p_16_regular" color="secondary">
					Длина
				</Typography>
				<Input placeholder="см" />
			</label>
		</div>
	);
};
