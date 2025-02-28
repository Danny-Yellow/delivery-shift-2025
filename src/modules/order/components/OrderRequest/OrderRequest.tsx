import { Success } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { Button, ButtonGroup, Typography } from '@src/shared/ui';
import { useSelector } from '@src/store';
import { useNavigate } from 'react-router';

import { selectOrder } from '../../store';
import { OrderCard } from '../OrderCard/OrderCard';

import styles from './styles.module.scss';

export const OrderRequest = () => {
	const { data: order } = useSelector(selectOrder);

	const navigate = useNavigate();

	if (!order) return null;

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
			<OrderCard
				_id={order._id}
				status="Создан"
				street={order.receiverAddress.street}
				type="Тип не приходит с сервера"
				house={order.receiverAddress.house}
				point={order.receiverPoint.name}
			>
				<Typography variant="p_14_regular" color="tertiary">
					Вся информация была продубирована в SMS
				</Typography>
			</OrderCard>
			<ButtonGroup className={styles.buttons}>
				<Button variant="outlined" onClick={() => navigate(ROUTES.ORDER_HISTORY)}>
					Посмотреть статс
				</Button>
				<Button onClick={() => navigate('/')}>На главную</Button>
			</ButtonGroup>
		</div>
	);
};
