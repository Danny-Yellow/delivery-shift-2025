import { DeliveryMethods } from '@src/modules/delivery-processing';
import { ReceiverForm } from '@src/modules/delivery-processing/components/ReceiverForm/ReceiverForm';
import { getCurrentStep } from '@src/modules/delivery-processing/store';
import { Progress } from '@src/shared/ui';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';

const stepsMap = [
	{
		title: 'Способ отправки',
		component: <DeliveryMethods />,
	},
	{
		title: 'Получатель',
		component: <ReceiverForm />,
	},
];

export const DeliveryProcessingPage = () => {
	const currentStep = useSelector(getCurrentStep);

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
