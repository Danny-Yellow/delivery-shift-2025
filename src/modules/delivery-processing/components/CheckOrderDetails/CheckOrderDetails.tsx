import { InfoPanel, InfoPanelElement, InfoPanelTitle, Pencil } from '@src/shared/components';
import { capitalizeFirstLetter, declensionWorkingDays } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';

import { decrementStep, getProcessingDetailsSelector } from '../../store';

import styles from './styles.module.scss';

export const CheckOrderDetails = ({ onSubmit }: { onSubmit: () => void }) => {
	const { option, receiver, receiverAddress, sender, senderAddress } = useSelector(
		getProcessingDetailsSelector,
	);

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
			{senderAddress && (
				<InfoPanel>
					<InfoPanelTitle>Откуда забрать</InfoPanelTitle>
					<InfoPanelElement label="Адрес">
						{senderAddress.street}, {senderAddress.house}, {senderAddress.apartment}
					</InfoPanelElement>
					<InfoPanelElement label="Заметка">{senderAddress.comment}</InfoPanelElement>
					<Pencil />
				</InfoPanel>
			)}
			{receiverAddress && (
				<InfoPanel>
					<InfoPanelTitle>Куда доставить</InfoPanelTitle>
					<InfoPanelElement label="Адрес">
						{receiverAddress.street}, {receiverAddress.house}, {receiverAddress.apartment}
					</InfoPanelElement>
					<InfoPanelElement label="Заметка">{receiverAddress.comment}</InfoPanelElement>
					<Pencil />
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
				<Button size="lg" type="submit">
					Продолжить
				</Button>
			</ButtonGroup>
		</Form>
	);
};
