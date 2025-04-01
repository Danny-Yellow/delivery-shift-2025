import { InfoGroup, InfoItem, InfoPanel, InfoTitle, Pencil } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { capitalizeFirstLetter, declensionWorkingDays } from '@src/shared/helpers';
import { useDeviceDetect } from '@src/shared/hooks';
import { Button, ButtonGroup, Form, IconButton, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useNavigate } from 'react-router';

import { decrementStep, getProcessingDetailsSelector, setStep } from '../../store';

import styles from './styles.module.scss';

export const CheckOrderDetails = ({ onSubmit }: { onSubmit: () => void }) => {
	const { option, receiver, receiverAddress, sender, senderAddress } = useSelector(
		getProcessingDetailsSelector,
	);
	const { isMobile } = useDeviceDetect();
	const navigate = useNavigate();

	const dispatch = useDispatch();

	return (
		<Form
			className={styles.form}
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit();
			}}
		>
			{receiver && (
				<InfoPanel>
					<InfoGroup>
						<InfoTitle>Получатель</InfoTitle>
						<InfoItem label="ФИО" size="md">
							{receiver.lastname} {receiver.firstname} {receiver.middlename}
						</InfoItem>
						<InfoItem label="Телефон">{receiver.phone}</InfoItem>
					</InfoGroup>
					<IconButton>
						<Pencil onClick={() => dispatch(setStep(2))} />
					</IconButton>
				</InfoPanel>
			)}
			{sender && (
				<InfoPanel>
					<InfoGroup>
						<InfoTitle>Отправитель</InfoTitle>
						<InfoItem label="ФИО" size="md">
							{sender.lastname} {sender.firstname} {sender.middlename}
						</InfoItem>
						<InfoItem label="Телефон">{sender.phone}</InfoItem>
					</InfoGroup>

					<IconButton>
						<Pencil onClick={() => dispatch(setStep(3))} />
					</IconButton>
				</InfoPanel>
			)}
			{senderAddress && (
				<InfoPanel>
					<InfoGroup>
						<InfoTitle>Откуда забрать</InfoTitle>
						<InfoItem label="Адрес" size="md">
							{senderAddress.street}, {senderAddress.house}, {senderAddress.apartment}
						</InfoItem>
						<InfoItem label="Заметка">{senderAddress.comment}</InfoItem>
					</InfoGroup>

					<IconButton>
						<Pencil onClick={() => dispatch(setStep(4))} />
					</IconButton>
				</InfoPanel>
			)}
			{receiverAddress && (
				<InfoPanel>
					<InfoGroup>
						<InfoTitle>Куда доставить</InfoTitle>
						<InfoItem label="Адрес" size="md">
							{receiverAddress.street}, {receiverAddress.house}, {receiverAddress.apartment}
						</InfoItem>
						<InfoItem label="Заметка">{receiverAddress.comment}</InfoItem>
					</InfoGroup>
					<IconButton>
						<Pencil onClick={() => dispatch(setStep(5))} />
					</IconButton>
				</InfoPanel>
			)}
			{option && (
				<div className={styles.total}>
					<Typography variant="h3">Итого: {option.price}</Typography>
					<div>
						<Typography variant="p_16_regular" color="secondary">
							Тариф: {capitalizeFirstLetter(option.name)}
						</Typography>
						<Typography variant="p_16_regular" color="secondary">
							Срок: {option.days} {declensionWorkingDays(option.days)}
						</Typography>
					</div>
				</div>
			)}

			{isMobile ? (
				<Button
					className={styles.mobile_button}
					type="submit"
					onClick={() => navigate(ROUTES.ORDER_REQUEST)}
				>
					Оформить
				</Button>
			) : (
				<ButtonGroup className={styles.button_group}>
					<Button size="lg" variant="outlined" onClick={() => dispatch(decrementStep())}>
						Назад
					</Button>
					<Button size="lg" type="submit">
						Продолжить
					</Button>
				</ButtonGroup>
			)}
		</Form>
	);
};
