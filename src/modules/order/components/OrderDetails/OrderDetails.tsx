import type { OrderWithStatus } from '@src/shared/types';

import { Button, ButtonGroup } from '@src/shared/ui';
import { useDispatch } from '@src/store';
import { useNavigate } from 'react-router';

import { openModal } from '../../store';
import { OrderCard } from '../OrderCard/OrderCard';

interface OrderDetailsProps {
	order: OrderWithStatus;
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<OrderCard
			_id={order._id}
			status={order.status}
			street={order.receiverAddress.street}
			type="Тип доставки"
			house={order.receiverAddress.house}
			point={order.receiverPoint.name}
		>
			<ButtonGroup>
				<Button size="sm" variant="outlined" onClick={() => navigate(-1)}>
					Назад
				</Button>
				<Button size="sm" onClick={() => dispatch(openModal())}>
					Отменить заказ
				</Button>
			</ButtonGroup>
		</OrderCard>
	);
};
