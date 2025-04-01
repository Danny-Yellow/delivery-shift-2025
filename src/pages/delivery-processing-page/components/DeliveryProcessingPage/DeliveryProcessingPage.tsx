import type { Address, Person } from '@src/shared/types';

import { selectSelectedPoints } from '@src/modules/calculation';
import {
	AddressForm,
	DeliveryMethods,
	PayerSelection,
	PersonalForm,
	ReceiverAddressForm,
} from '@src/modules/delivery-processing';
import { CheckOrderDetails } from '@src/modules/delivery-processing/components/CheckOrderDetails/CheckOrderDetails';
import {
	decrementStep,
	getProcessingDetailsSelector,
	reset,
	selectCurrentStep,
	selectPersons,
	selectSenderAddress,
	setReceiver,
	setSender,
	setSenderAddress,
} from '@src/modules/delivery-processing/store';
import { createDeliveryOrderThunk } from '@src/modules/order/store';
import { AdaptivePageHeader, ArrowLeft, Cross } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { IconButton, Progress, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';

export const DeliveryProcessingPage = () => {
	const dispatch = useDispatch();

	const currentStep = useSelector(selectCurrentStep);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(reset());
	}, []);

	const details = useSelector(getProcessingDetailsSelector);
	const points = useSelector(selectSelectedPoints);
	const persons = useSelector(selectPersons);
	const senderAddress = useSelector(selectSenderAddress);

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
						navigate(ROUTES.ORDER_REQUEST);
					}}
				/>
			),
		},
	];

	return (
		<div className={styles.page}>
			<AdaptivePageHeader
				mobileButton={
					currentStep > 1 ? (
						<IconButton onClick={() => dispatch(decrementStep())}>
							<ArrowLeft />
						</IconButton>
					) : (
						<IconButton onClick={() => navigate('/')}>
							<Cross />
						</IconButton>
					)
				}
			>
				<Typography tag="h1" variant="h2">
					{stepsMap[currentStep - 1].title}
				</Typography>
			</AdaptivePageHeader>
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
