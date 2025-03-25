import type { OrderWithStatus } from '@src/shared/types';

import { Button, ButtonGroup } from '@src/shared/ui';
import { useNavigate } from 'react-router';

import { OrderCard } from '../OrderCard/OrderCard';

interface OrderDetailsProps {
	order: OrderWithStatus;
	onCancelClick: () => void;
}

export const OrderDetails = ({ order, onCancelClick }: OrderDetailsProps) => {
	const navigate = useNavigate();

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
				<Button size="sm" onClick={onCancelClick}>
					Отменить заказ
				</Button>
			</ButtonGroup>
		</OrderCard>
	);
};
