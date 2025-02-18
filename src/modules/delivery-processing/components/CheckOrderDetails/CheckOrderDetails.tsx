import { InfoPanel, InfoPanelElement, InfoPanelTitle, Pencil } from '@src/shared/components';
import { capitalizeFirstLetter, declensionWorkingDays } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';

import { decrementStep, getOrderDetailsSelector } from '../../store';

import styles from './styles.module.scss';

export const CheckOrderDetails = ({ onSubmit }: { onSubmit: () => void }) => {
	const { method, receiver, receiverAdress, sender, senderAdress } =
		useSelector(getOrderDetailsSelector);

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
					<InfoPanelElement label="ФИО">
						{receiver.lastname} {receiver.firstname} {receiver.middlename}
					</InfoPanelElement>
					<InfoPanelElement label="Телефон">{receiver.phone}</InfoPanelElement>
					<Pencil />
				</InfoPanel>
			)}
			{sender && (
				<InfoPanel>
					<InfoPanelTitle>Отправитель</InfoPanelTitle>
					<InfoPanelElement label="ФИО">
						{sender.lastname} {sender.firstname} {sender.middlename}
					</InfoPanelElement>
					<InfoPanelElement label="Телефон">{sender.phone}</InfoPanelElement>
					<Pencil />
				</InfoPanel>
			)}
			{senderAdress && (
				<InfoPanel>
					<InfoPanelTitle>Откуда забрать</InfoPanelTitle>
					<InfoPanelElement label="Адрес">
						{senderAdress.street}, {senderAdress.house}, {senderAdress.apartment}
					</InfoPanelElement>
					<InfoPanelElement label="Заметка">{senderAdress.comment}</InfoPanelElement>
					<Pencil />
				</InfoPanel>
			)}
			{receiverAdress && (
				<InfoPanel>
					<InfoPanelTitle>Куда доставить</InfoPanelTitle>
					<InfoPanelElement label="Адрес">
						{receiverAdress.street}, {receiverAdress.house}, {receiverAdress.apartment}
					</InfoPanelElement>
					<InfoPanelElement label="Заметка">{receiverAdress.comment}</InfoPanelElement>
					<Pencil />
				</InfoPanel>
			)}
			{method && (
				<div className={styles.method}>
					<Typography variant="h3">Итого: {method.price}</Typography>
					<div>
						<Typography variant="p_16_regular" color="secondary">
							Тариф: {capitalizeFirstLetter(method.name)}
						</Typography>
						<Typography variant="p_16_regular" color="secondary">
							Срок: {method.days} {declensionWorkingDays(method.days)}
						</Typography>
					</div>
				</div>
			)}
			<ButtonGroup>
				<Button variant="outlined" onClick={() => dispatch(decrementStep())}>
					Назад
				</Button>
				<Button type="submit">Продолжить</Button>
			</ButtonGroup>
		</Form>
	);
};
