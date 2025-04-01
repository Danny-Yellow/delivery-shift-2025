import type { OrderWithStatus } from '@src/shared/types';

import { useDeviceDetect } from '@src/shared/hooks';
import { Button, ButtonGroup } from '@src/shared/ui';
import { useDispatch } from '@src/store';
import { useNavigate } from 'react-router';

import { openModal } from '../../store';
import { OrderCard } from '../OrderCard/OrderCard';

import styles from './styles.module.scss';

interface OrderDetailsProps {
	order: OrderWithStatus;
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isMobile } = useDeviceDetect();

	return (
		<OrderCard
			_id={order._id}
			className={styles.card}
			status={order.status}
			street={order.receiverAddress.street}
			type="Тип доставки"
			house={order.receiverAddress.house}
			point={order.receiverPoint.name}
		>
			<ButtonGroup className={styles.button_group}>
				{!isMobile && (
					<Button variant="outlined" onClick={() => navigate(-1)}>
						Назад
					</Button>
				)}
				<Button onClick={() => dispatch(openModal())}>Отменить заказ</Button>
			</ButtonGroup>
		</OrderCard>
	);
};
