import { InfoPanel, InfoPanelTitle, Pencil } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { capitalizeFirstLetter, declensionWorkingDays } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, IconButton, InfoRow, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useNavigate } from 'react-router';

import { decrementStep, getProcessingDetailsSelector, setStep } from '../../store';

import styles from './styles.module.scss';

export const CheckOrderDetails = ({ onSubmit }: { onSubmit: () => void }) => {
	const { option, receiver, receiverAddress, sender, senderAddress } = useSelector(
		getProcessingDetailsSelector,
	);

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
					<InfoPanelTitle>Получатель</InfoPanelTitle>
					<InfoRow label="ФИО" size="md">
						{receiver.lastname} {receiver.firstname} {receiver.middlename}
					</InfoRow>
					<InfoRow label="Телефон">{receiver.phone}</InfoRow>
					<IconButton>
						<Pencil onClick={() => dispatch(setStep(2))} />
					</IconButton>
				</InfoPanel>
			)}
			{sender && (
				<InfoPanel>
					<InfoPanelTitle>Отправитель</InfoPanelTitle>
					<InfoRow label="ФИО" size="md">
						{sender.lastname} {sender.firstname} {sender.middlename}
					</InfoRow>
					<InfoRow label="Телефон">{sender.phone}</InfoRow>
					<IconButton>
						<Pencil onClick={() => dispatch(setStep(3))} />
					</IconButton>
				</InfoPanel>
			)}
			{senderAddress && (
				<InfoPanel>
					<InfoPanelTitle>Откуда забрать</InfoPanelTitle>
					<InfoRow label="Адрес" size="md">
						{senderAddress.street}, {senderAddress.house}, {senderAddress.apartment}
					</InfoRow>
					<InfoRow label="Заметка">{senderAddress.comment}</InfoRow>
					<IconButton>
						<Pencil onClick={() => dispatch(setStep(4))} />
					</IconButton>
				</InfoPanel>
			)}
			{receiverAddress && (
				<InfoPanel>
					<InfoPanelTitle>Куда доставить</InfoPanelTitle>
					<InfoRow label="Адрес" size="md">
						{receiverAddress.street}, {receiverAddress.house}, {receiverAddress.apartment}
					</InfoRow>
					<InfoRow label="Заметка">{receiverAddress.comment}</InfoRow>
					<IconButton>
						<Pencil onClick={() => dispatch(setStep(5))} />
					</IconButton>
				</InfoPanel>
			)}
			{option && (
				<div className={styles.method}>
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
			<ButtonGroup className={styles.button_group}>
				<Button size="lg" variant="outlined" onClick={() => dispatch(decrementStep())}>
					Назад
				</Button>
				<Button size="lg" type="submit" onClick={() => navigate(ROUTES.ORDER_REQUEST)}>
					Продолжить
				</Button>
			</ButtonGroup>
		</Form>
	);
};
