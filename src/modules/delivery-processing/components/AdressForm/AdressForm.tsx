import type { Adress, AdressWithOptions } from '@src/shared/types/entitites/adress';

import { Question } from '@src/shared/components';
import {
	Button,
	ButtonGroup,
	Form,
	InputLabel,
	InputWithPrefix,
	Tooltip,
	TooltipBody,
	TooltipContent,
	TooltipHeader,
	TooltipTrigger,
	Typography,
} from '@src/shared/ui';
import { Checkbox, CheckboxLabel } from '@src/shared/ui/Checkbox/Checkbox';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { adressFields } from '../../constants/adressFields';
import { PersonalFormSchema } from '../../lib/ReceiverFormSchema';
import { decrementStep, incrementStep } from '../../store';

import styles from './styles.module.scss';

export const AdressForm = ({
	onSubmit,
	isReceiverAdress = false,
}: {
	onSubmit: (value: Adress | AdressWithOptions) => void;
	isReceiverAdress?: boolean;
}) => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);

	const dispatch = useDispatch();

	const defaultValues = adressFields.reduce(
		(prevField, curField) => ({
			...prevField,
			[curField.name]: '',
		}),
		{} as Adress,
	);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues,
		onSubmit: ({ value }) => {
			onSubmit(value);
			dispatch(incrementStep());
		},
		validators: {
			onChange: PersonalFormSchema,
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			{adressFields.map(({ label, name, placeholder, format }) => (
				<Field
					key={name}
					children={({ state, handleChange }) => {
						const error = state.meta.errors[0]?.toString().split(', ')[0];
						const errorIsShown = continueIsClicked && !!error;

						return (
							<InputLabel>
								<Typography variant="p_14_regular" color={errorIsShown ? 'error' : 'primary'}>
									{label}
								</Typography>
								<InputWithPrefix
									prefix={format}
									value={state.value}
									onChange={(event) => {
										handleChange(event.target.value);
									}}
									placeholder={placeholder}
								/>
								{continueIsClicked && !!state.meta.errors.length && (
									<Typography variant="p_14_regular" color="error">
										{error}
									</Typography>
								)}
							</InputLabel>
						);
					}}
					name={name}
				/>
			))}
			{isReceiverAdress && (
				<CheckboxLabel>
					<Checkbox defaultChecked={false} />
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
			)}
			<ButtonGroup>
				<Button variant="outlined" onClick={() => dispatch(decrementStep())}>
					Назад
				</Button>
				<Subscribe
					children={() => {
						return (
							<Button type="submit" onClick={() => setContinueIsClicked(true)}>
								Продолжить
							</Button>
						);
					}}
					selector={(state) => state}
				/>
			</ButtonGroup>
		</Form>
	);
};
