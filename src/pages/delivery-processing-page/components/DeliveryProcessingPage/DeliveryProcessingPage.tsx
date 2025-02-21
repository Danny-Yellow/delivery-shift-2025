import type { Address, Person } from '@src/shared/types';

import { getSelectedPointsSelector } from '@src/modules/calculation';
import {
	AddressForm,
	DeliveryMethods,
	PayerSelection,
	PersonalForm,
	ReceiverAddressForm,
} from '@src/modules/delivery-processing';
import { CheckOrderDetails } from '@src/modules/delivery-processing/components/CheckOrderDetails/CheckOrderDetails';
import {
	getCurrentStepSelector,
	getPersonsSelector,
	getProcessingDetailsSelector,
	getSenderAddressSelector,
	reset,
	setReceiver,
	setSender,
	setSenderAddress,
} from '@src/modules/delivery-processing/store';
import { createDeliveryOrderThunk } from '@src/modules/order/store';
import { Progress, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';

import styles from './styles.module.scss';

export const DeliveryProcessingPage = () => {
	const dispatch = useDispatch();

	const currentStep = useSelector(getCurrentStepSelector);

	useEffect(() => {
		dispatch(reset());
	}, []);

	const details = useSelector(getProcessingDetailsSelector);
	const points = useSelector(getSelectedPointsSelector);
	const persons = useSelector(getPersonsSelector);
	const senderAddress = useSelector(getSenderAddressSelector);

	const stepsMap = [
		{
			title: 'Способ отправки',
			component: <DeliveryMethods />,
		},
		{
			title: 'Получатель',
			component: (
				<PersonalForm
					key={1}
					defaultValues={persons.receiver}
					onSubmit={(value: Person) => dispatch(setReceiver(value))}
				/>
			),
		},
		{
			title: 'Отправитель',
			component: (
				<PersonalForm
					key={2}
					defaultValues={persons.sender}
					onSubmit={(value: Person) => dispatch(setSender(value))}
				/>
			),
		},
		{
			title: 'Откуда забрать',
			component: (
				<AddressForm
					defaultValues={senderAddress}
					onSubmit={(value: Address) => dispatch(setSenderAddress(value))}
				/>
			),
		},
		{
			title: 'Куда доставить',
			component: <ReceiverAddressForm />,
		},
		{
			title: 'Оплата доставки',
			component: <PayerSelection />,
		},
		{
			title: 'Проверка данных заказа',
			component: (
				<CheckOrderDetails
					onSubmit={() => {
						dispatch(createDeliveryOrderThunk({ ...details, ...points }));
					}}
				/>
			),
		},
	];

	return (
		<div className={styles.page}>
			<Typography tag="h1" variant="h2">
				{stepsMap[currentStep - 1].title}
			</Typography>
			<div className={styles.progress}>
				<Typography variant="p_12_regular">
					Шаг {currentStep} из {7}
				</Typography>
				<Progress max={7} value={currentStep} />
			</div>
			{stepsMap[currentStep - 1].component}
		</div>
	);
};
