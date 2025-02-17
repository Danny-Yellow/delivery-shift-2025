import type { Adress, Person, ReceiverAdress } from '@src/shared/types';

import { AdressForm, DeliveryMethods, PersonalForm } from '@src/modules/delivery-processing';
import { ReceiverAdressForm } from '@src/modules/delivery-processing/components/ReceiverAdressForm/ReceiverAdressForm';
import {
	getCurrentStep,
	reset,
	setReceiver,
	setReceiverAdress,
	setSender,
	setSenderAdress,
} from '@src/modules/delivery-processing/store';
import { Progress } from '@src/shared/ui';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';

export const DeliveryProcessingPage = () => {
	const dispatch = useDispatch();

	const currentStep = useSelector(getCurrentStep);

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
			component: (
				<ReceiverAdressForm
					onSubmit={(value: ReceiverAdress) => dispatch(setReceiverAdress(value))}
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
