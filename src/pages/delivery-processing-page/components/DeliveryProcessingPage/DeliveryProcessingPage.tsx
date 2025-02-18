import type { Adress, Person } from '@src/shared/types';

import {
	AdressForm,
	DeliveryMethods,
	PayerSelection,
	PersonalForm,
	ReceiverAdressForm,
} from '@src/modules/delivery-processing';
import { CheckOrderDetails } from '@src/modules/delivery-processing/components/CheckOrderDetails/CheckOrderDetails';
import {
	getCurrentStepSelector,
	reset,
	setReceiver,
	setSender,
	setSenderAdress,
} from '@src/modules/delivery-processing/store';
import { Progress, Typography } from '@src/shared/ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';

export const DeliveryProcessingPage = () => {
	const dispatch = useDispatch();

	const currentStep = useSelector(getCurrentStepSelector);

	useEffect(() => {
		dispatch(reset());
	}, []);

	const stepsMap = [
		{
			title: 'Способ отправки',
			component: <DeliveryMethods />,
		},
		{
			title: 'Получатель',
			component: (
				<PersonalForm key={1} onSubmit={(value: Person) => dispatch(setReceiver(value))} />
			),
		},
		{
			title: 'Отправитель',
			component: <PersonalForm key={2} onSubmit={(value: Person) => dispatch(setSender(value))} />,
		},
		{
			title: 'Откуда забрать',
			component: <AdressForm onSubmit={(value: Adress) => dispatch(setSenderAdress(value))} />,
		},
		{
			title: 'Куда доставить',
			component: <ReceiverAdressForm />,
		},
		{
			title: 'Оплата доставки',
			component: <PayerSelection />,
		},
		{
			title: 'Проверка данных заказа',
			component: <CheckOrderDetails onSubmit={() => {}} />,
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
