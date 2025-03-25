import { getOrderThunk, OrderDetails, selectOrderDetails } from '@src/modules/order';
import {
	Toast,
	ToastProvider,
	Typography,
	useToast,
} from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { CancelOrderModal } from '../CancelOrderModal/CancelOrderModal';

import styles from './styles.module.scss';

export const OrderDetailsPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const { data: order, isLoading, error } = useSelector(selectOrderDetails);

	const { closeToast, toastIsOpened, toastVariant, toastMessage, openToast } = useToast();

	useEffect(() => {
		dispatch(getOrderThunk(id));
	}, []);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>error :(</div>;

	if (order) {
		return (
			<div className={styles.page}>
				<Typography tag="h2" variant="h2">
					Детали заказа
				</Typography>
				<OrderDetails order={order} />
				<CancelOrderModal openToast={openToast} orderId={id} />
				<ToastProvider>
					<Toast variant={toastVariant} onOpenChange={closeToast} open={toastIsOpened}>
						{toastMessage}
					</Toast>
				</ToastProvider>
			</div>
		);
	}
};
