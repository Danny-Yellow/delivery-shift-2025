import { getOrderThunk, OrderDetails, selectOrderDetails } from '@src/modules/order';
import { Cross, Question } from '@src/shared/components';
import {
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalViewport,
	Typography,
	useModal,
} from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './styles.module.scss';

export const OrderDetailsPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const { modalIsOpen, openModal, closeModal } = useModal();

	const { data: order, isLoading, error } = useSelector(selectOrderDetails);

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
				<OrderDetails onCancelClick={openModal} order={order} />
				<Modal isOpen={modalIsOpen}>
					<ModalViewport onClose={closeModal}>
						<ModalContent className={styles.modal_content}>
							<ModalHeader>
								<IconButton onClick={closeModal}>
									<Cross />
								</IconButton>
							</ModalHeader>
							<ModalBody className={styles.modal_body}>
								<Question />
								<Typography className={styles.modal_title} variant="h2">
									Отменить заказ?
								</Typography>
								<div className={styles.modal_buttons}>
									<Button variant="outlined" onClick={closeModal}>
										Не отменять
									</Button>
									<Button>Отменить</Button>
								</div>
							</ModalBody>
						</ModalContent>
					</ModalViewport>
				</Modal>
			</div>
		);
	}
};
