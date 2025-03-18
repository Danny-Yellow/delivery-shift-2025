import type { OrderWithStatus } from '@src/shared/types';

import { OrderCard } from '../OrderCard/OrderCard';

interface OrderDetailsProps {
	order: OrderWithStatus;
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
	return (
		<OrderCard
			_id={order._id}
			status={order.status}
			street={order.receiverAddress.street}
			type="Тип доставки"
			house={order.receiverAddress.house}
			point={order.receiverPoint.name}
		/>
	);
};
