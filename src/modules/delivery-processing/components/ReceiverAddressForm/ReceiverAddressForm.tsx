import type { Address, ReceiverAddress } from '@src/shared/types';

import { InfoQuestion } from '@src/shared/components';
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
import { useDispatch, useSelector } from '@src/store';
import { useState } from 'react';

import { selectReceiverAddress, setReceiverAddress } from '../../store';
import { AddressForm } from '../AddressForm/AddressForm';

import styles from './styles.module.scss';

export const ReceiverAddressForm = () => {
	const dispatch = useDispatch();

	const receiverAddress = useSelector(selectReceiverAddress);

	const [options, setOptions] = useState<Omit<ReceiverAddress, keyof Address>>({
		isNonContact: receiverAddress?.isNonContact ?? false,
	});

	return (
		<>
			<AddressForm
				defaultValues={receiverAddress}
				onSubmit={(value) => dispatch(setReceiverAddress({ ...value, ...options }))}
			>
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
								<InfoQuestion />
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
			</AddressForm>
		</>
	);
};
