import { Location } from '@src/shared/components/Icons/Location';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectViewport,
} from '@src/shared/ui';
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

export const CalculateDeliveryCard = () => {
	return (
		<form className={styles.card}>
			<div className={styles.header}>
				<Typography variant="h2">Рассчитать доставку</Typography>
			</div>
			<div className={styles.content}>
				<Select>
					<SelectTrigger startIcon={<Location />}>
						<SelectValue placeholder="Москва" />
					</SelectTrigger>
					<SelectContent>
						<SelectViewport>
							<SelectItem value="moscow">Москва</SelectItem>
							<SelectItem value="spb">Санкт-Петербург</SelectItem>
							<SelectItem value="nsk">Новосибирск</SelectItem>
						</SelectViewport>
					</SelectContent>
				</Select>
			</div>
		</form>
	);
};
