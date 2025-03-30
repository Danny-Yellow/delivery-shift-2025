import { BottomNavigation } from '@src/shared/components';
import { Button, Typography } from '@src/shared/ui';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';

export const EmptyPage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.page}>
			<div className={styles.empty}>
				<Typography tag="h2" variant="h2">
					Заказов пока что нет
				</Typography>
				<Typography variant="p_16_regular">Оформите свою первую доставку по кнопке ниже</Typography>
				<Button className={styles.button} size="lg" onClick={() => navigate('/')}>
					Оформить доставку
				</Button>
			</div>
			<BottomNavigation />
		</div>
	);
};
