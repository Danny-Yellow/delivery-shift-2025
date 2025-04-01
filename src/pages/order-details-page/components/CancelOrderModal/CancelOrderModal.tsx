import type { ToastVariant } from '@src/shared/ui';

import {
	cancelOrderThunk,
	closeModal,
	selectCancelOrder,
	selectCancelOrderModal,
} from '@src/modules/order';
import { Cross, Question } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import {
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalViewport,
	Typography,
} from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';

export const CancelOrderModal = ({
	orderId,
	openToast,
}: {
	orderId: string;
	openToast: (variant: ToastVariant, message: string) => void;
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isOpen } = useSelector(selectCancelOrderModal);
	const { isSuccess } = useSelector(selectCancelOrder);

	function handleCancelClick() {
		dispatch(cancelOrderThunk(orderId));
	}

	useEffect(() => {
		if (isSuccess === true) {
			navigate(ROUTES.ORDER_HISTORY);
		}

		if (isSuccess === false) {
			openToast('error', 'Произошла ошибка!');
		}
	}, [isSuccess]);

	return (
		<Modal isOpen={isOpen}>
			<ModalViewport onClose={() => dispatch(closeModal())}>
				<ModalContent className={styles.modal_content}>
					<ModalHeader>
						<IconButton onClick={() => dispatch(closeModal())}>
							<Cross />
						</IconButton>
					</ModalHeader>
					<ModalBody className={styles.modal_body}>
						<Question />
						<Typography className={styles.modal_title} variant="h2">
							Отменить заказ?
						</Typography>
						<div className={styles.modal_buttons}>
							<Button variant="outlined" onClick={() => dispatch(closeModal())}>
								Не отменять
							</Button>
							<Button onClick={handleCancelClick}>Отменить</Button>
						</div>
					</ModalBody>
				</ModalContent>
			</ModalViewport>
		</Modal>
	);
};
