import { OrderRequest, selectOrderRequest } from '@src/modules/order';
import { Spinner } from '@src/shared/ui';
import { useSelector } from '@src/store';
import { Navigate } from 'react-router';

export const OrderRequestPage = () => {
	const { data: order, isLoading } = useSelector(selectOrderRequest);

	if (isLoading) return <Spinner />;

	if (order) return <OrderRequest order={order} />;

	return <Navigate to={'/'} />;
};
