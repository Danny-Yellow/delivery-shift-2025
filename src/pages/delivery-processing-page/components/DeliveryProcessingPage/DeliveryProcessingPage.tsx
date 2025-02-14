import type { Person } from '@src/shared/types';

import { DeliveryMethods } from '@src/modules/delivery-processing';
import { PersonalForm } from '@src/modules/delivery-processing/components/PersonalForm/PersonalForm';
import { getCurrentStep, reset, setReceiver } from '@src/modules/delivery-processing/store';
import { Progress } from '@src/shared/ui';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';

export const DeliveryProcessingPage = () => {
	const dispatch = useDispatch();

	const stepsMap = [
		{
			title: 'Способ отправки',
			component: <DeliveryMethods />,
		},
		{
			title: 'Получатель',
			component: <PersonalForm onSubmit={(value: Person) => dispatch(setReceiver(value))} />,
		},
	];

	const currentStep = useSelector(getCurrentStep);

	useEffect(() => {
		dispatch(reset());
	}, []);

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
