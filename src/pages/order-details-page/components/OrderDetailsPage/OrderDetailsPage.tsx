import { getOrderThunk, OrderDetails, selectOrderDetails } from '@src/modules/order';
import { AdaptivePageHeader, ArrowLeft, BottomNavigation } from '@src/shared/components';
import { IconButton, Toast, ToastProvider, Typography, useToast } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { CancelOrderModal } from '../CancelOrderModal/CancelOrderModal';

import styles from './styles.module.scss';

export const OrderDetailsPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
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
				<AdaptivePageHeader
					mobileButton={
						<IconButton onClick={() => navigate(-1)}>
							<ArrowLeft />
						</IconButton>
					}
				>
					<Typography tag="h2" variant="h2">
						Детали заказа
					</Typography>
				</AdaptivePageHeader>
				<OrderDetails order={order} />
				<CancelOrderModal openToast={openToast} orderId={id} />
				<BottomNavigation />
				<ToastProvider>
					<Toast variant={toastVariant} onOpenChange={closeToast} open={toastIsOpened}>
						{toastMessage}
					</Toast>
				</ToastProvider>
			</div>
		);
	}
};
