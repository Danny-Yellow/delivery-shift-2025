import { OrderHistory } from '@src/modules/order-history';
import { getOrdersThunk, selectOrderHistory } from '@src/modules/order-history/store';
import { useDispatch } from '@src/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { EmptyPage } from '../EmptyPage/EmptyPage';

export const HistoryPage = () => {
	const { data: orders, error, isLoading } = useSelector(selectOrderHistory);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrdersThunk());
	}, []);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>error :(</div>;

	if (!orders?.length) return <EmptyPage />;

	return <OrderHistory orders={orders} />;
};
