import type { Adress, ReceiverAdress } from '@src/shared/types';

import { Question } from '@src/shared/components';
import {
	Checkbox,
	CheckboxLabel,
	Tooltip,
	TooltipBody,
	TooltipContent,
	TooltipHeader,
	TooltipTrigger,
	Typography,
} from '@src/shared/ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setReceiverAdress } from '../../store';
import { AdressForm } from '../AdressForm/AdressForm';

import styles from './styles.module.scss';

export const ReceiverAdressForm = () => {
	const dispatch = useDispatch();

	const [options, setOptions] = useState<Omit<ReceiverAdress, keyof Adress>>({
		isNonContact: false,
	});

	return (
		<>
			<AdressForm onSubmit={(value) => dispatch(setReceiverAdress({ ...value, ...options }))}>
				<CheckboxLabel>
					<Checkbox
						checked={options.isNonContact}
						defaultChecked={false}
						onCheckedChange={(checked) => {
							if (checked === 'indeterminate') {
								setOptions({ ...options, isNonContact: false });
								return;
							}

							setOptions({ ...options, isNonContact: !options.isNonContact });
						}}
					/>
					<div className={styles.helper}>
						<Typography variant="p_16_regular">Оставить заказ у двери</Typography>
						<Tooltip>
							<TooltipTrigger>
								<Question />
							</TooltipTrigger>
							<TooltipContent>
								<TooltipHeader>Бесконтактная доставка</TooltipHeader>
								<TooltipBody>
									Курьер привозит заказ, оставляет его у двери и уходит, а вам приходит уведомление
									на телефон о том, что заказ доставлен
								</TooltipBody>
							</TooltipContent>
						</Tooltip>
					</div>
				</CheckboxLabel>
			</AdressForm>
		</>
	);
};
