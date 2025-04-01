import { getOrdersThunk, OrderHistory, selectOrderHistory } from '@src/modules/order/';
import { BottomNavigation } from '@src/shared/components';
import { Spinner } from '@src/shared/ui';
import { useDispatch } from '@src/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { EmptyPage } from '../EmptyPage/EmptyPage';

export const HistoryPage = () => {
	const { data: orders, isLoading } = useSelector(selectOrderHistory);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrdersThunk());
	}, []);

	let content = <OrderHistory orders={orders} />;

	if (!orders?.length) {
		content = <EmptyPage />;
	}

	if (isLoading) {
		content = <Spinner />;
	}

	return (
		<>
			{content}
			<BottomNavigation />
		</>
	);
};
