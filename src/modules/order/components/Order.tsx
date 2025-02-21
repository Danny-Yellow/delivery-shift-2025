import { Success } from '@src/shared/components';
import { Button, ButtonGroup, Card, InfoRow, Typography } from '@src/shared/ui';

import styles from './styles.module.scss';

export const Order = () => {
	return (
		<div className={styles.order}>
			<div className={styles.status}>
				<Success />
				<Typography tag="h2" variant="h2">
					Заявка отправлена
				</Typography>
			</div>
			<Typography variant="p_16_regular">
				Вы можете оплатить ваш заказ в разделе «Профиль»
			</Typography>
			<Card className={styles.card} outlined>
				<InfoRow label="Номер заказа">1234567</InfoRow>
				<InfoRow label="Статус">Создан</InfoRow>
				<InfoRow label="Адресс доставки">Россия, г. Новосибирск, ул. Кирова, д. 86</InfoRow>
				<InfoRow label="Тип доставки">Экспресс доставка</InfoRow>
				<Typography variant="p_14_regular" color="tertiary">
					Вся информация была продубирована в SMS
				</Typography>
			</Card>
			<ButtonGroup className={styles.buttons}>
				<Button variant="outlined">Посмотреть статс</Button>
				<Button>На главную</Button>
			</ButtonGroup>
		</div>
	);
};
