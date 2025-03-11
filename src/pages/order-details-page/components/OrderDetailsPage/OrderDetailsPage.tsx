import { getOrderThunk, OrderDetails, selectOrderDetails } from '@src/modules/order';
import { Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export const OrderDetailsPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const { data: order, isLoading, error } = useSelector(selectOrderDetails);

	useEffect(() => {
		dispatch(getOrderThunk(id));
	}, []);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>error :(</div>;

	if (order) {
		return (
			<>
				<Typography tag="h2" variant="h2">
					Детали заказа
				</Typography>
				<OrderDetails order={order} />
			</>
		);
	}
};
